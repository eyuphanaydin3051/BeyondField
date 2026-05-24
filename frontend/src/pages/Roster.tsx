import {
  type FormEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useTranslation } from 'react-i18next'
import type { AxiosError } from 'axios'
import apiClient from '../lib/apiClient'
import { useAppStore } from '../store/appStore'
import type {
  LeaderboardMode,
  LeaderboardResponse,
  LeaderboardSortBy,
  Player,
  PlayerPosition,
} from '../types'

interface ErrorResponse {
  status: 'error'
  message: string
}

type Tab = 'players' | 'leaderboard'

const POSITIONS: PlayerPosition[] = ['HANDLER', 'CUTTER', 'HYBRID']

const LEADERBOARD_METRICS: LeaderboardSortBy[] = [
  'goals',
  'assists',
  'blocks',
  'throwaways',
  'drops',
  'callahans',
  'completions',
  'plusMinus',
  'pointsPlayed',
  'matchesPlayed',
]

const LEADERBOARD_MODES: LeaderboardMode[] = ['TOTAL', 'PER_MATCH', 'PER_POINT']

interface PlayerFormState {
  firstName: string
  lastName: string
  position: PlayerPosition
  jerseyNumber: string
  photoUrl: string
}

const emptyForm: PlayerFormState = {
  firstName: '',
  lastName: '',
  position: 'HYBRID',
  jerseyNumber: '',
  photoUrl: '',
}

export default function Roster() {
  const { t } = useTranslation()
  const selectedTeam = useAppStore((s) => s.selectedTeam)

  const [tab, setTab] = useState<Tab>('players')

  // ---- Players state ----
  const [players, setPlayers] = useState<Player[]>([])
  const [playersLoading, setPlayersLoading] = useState(true)
  const [playersError, setPlayersError] = useState<string | null>(null)

  const [modalMode, setModalMode] = useState<'add' | 'edit' | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<PlayerFormState>(emptyForm)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  // ---- Leaderboard state ----
  const [sortBy, setSortBy] = useState<LeaderboardSortBy>('goals')
  const [mode, setMode] = useState<LeaderboardMode>('TOTAL')
  const [leaderboard, setLeaderboard] = useState<LeaderboardResponse | null>(null)
  const [leaderboardLoading, setLeaderboardLoading] = useState(false)
  const [leaderboardError, setLeaderboardError] = useState<string | null>(null)

  const teamId = selectedTeam?.id

  const loadPlayers = useCallback(async () => {
    if (!teamId) return
    setPlayersLoading(true)
    setPlayersError(null)
    try {
      const res = await apiClient.get<{ status: 'success'; data: Player[] }>(
        `/api/teams/${teamId}/players`,
      )
      setPlayers(res.data.data)
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      setPlayersError(ax.response?.data?.message ?? t('roster.errors.loadFailed'))
    } finally {
      setPlayersLoading(false)
    }
  }, [teamId, t])

  const loadLeaderboard = useCallback(async () => {
    if (!teamId) return
    setLeaderboardLoading(true)
    setLeaderboardError(null)
    try {
      const res = await apiClient.get<{
        status: 'success'
        data: LeaderboardResponse
      }>(`/api/teams/${teamId}/leaderboard`, {
        params: { sortBy, mode },
      })
      setLeaderboard(res.data.data)
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      setLeaderboardError(
        ax.response?.data?.message ?? t('roster.errors.leaderboardFailed'),
      )
    } finally {
      setLeaderboardLoading(false)
    }
  }, [teamId, sortBy, mode, t])

  useEffect(() => {
    loadPlayers()
  }, [loadPlayers])

  useEffect(() => {
    if (tab === 'leaderboard') loadLeaderboard()
  }, [tab, loadLeaderboard])

  const openAdd = () => {
    setForm(emptyForm)
    setEditingId(null)
    setFormError(null)
    setModalMode('add')
  }

  const openEdit = (p: Player) => {
    setForm({
      firstName: p.firstName,
      lastName: p.lastName,
      position: p.position,
      jerseyNumber: String(p.jerseyNumber),
      photoUrl: p.photoUrl ?? '',
    })
    setEditingId(p.id)
    setFormError(null)
    setModalMode('edit')
  }

  const closeModal = () => {
    setModalMode(null)
    setEditingId(null)
    setForm(emptyForm)
    setFormError(null)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!teamId) return
    setSubmitting(true)
    setFormError(null)
    const payload = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      position: form.position,
      jerseyNumber: Number(form.jerseyNumber),
      photoUrl: form.photoUrl.trim() || null,
    }
    try {
      if (modalMode === 'add') {
        await apiClient.post(`/api/teams/${teamId}/players`, payload)
      } else if (modalMode === 'edit' && editingId) {
        await apiClient.put(`/api/players/${editingId}`, payload)
      }
      closeModal()
      await loadPlayers()
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      setFormError(ax.response?.data?.message ?? t('roster.errors.saveFailed'))
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!window.confirm(t('roster.modal.delete.message'))) return
    setDeletingId(id)
    try {
      await apiClient.delete(`/api/players/${id}`)
      await loadPlayers()
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      alert(ax.response?.data?.message ?? t('roster.errors.deleteFailed'))
    } finally {
      setDeletingId(null)
    }
  }

  const tabBtnCls = (active: boolean) =>
    [
      'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
      active
        ? 'bg-violet-600 text-white'
        : 'bg-gray-800 text-gray-300 hover:bg-gray-700',
    ].join(' ')

  const formatDisplay = useMemo(
    () => (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(2)),
    [],
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t('roster.title')}</h1>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setTab('players')}
            className={tabBtnCls(tab === 'players')}
          >
            {t('roster.tabs.players')}
          </button>
          <button
            type="button"
            onClick={() => setTab('leaderboard')}
            className={tabBtnCls(tab === 'leaderboard')}
          >
            {t('roster.tabs.leaderboard')}
          </button>
        </div>
      </div>

      {tab === 'players' && (
        <section className="space-y-4">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={openAdd}
              className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-semibold"
            >
              {t('roster.table.addButton')}
            </button>
          </div>

          {playersLoading && (
            <p className="text-gray-400 text-center py-8">{t('common.loading')}</p>
          )}
          {playersError && !playersLoading && (
            <div className="px-4 py-3 bg-red-900/40 border border-red-700/60 rounded-lg text-red-400 text-center">
              {playersError}
            </div>
          )}
          {!playersLoading && !playersError && players.length === 0 && (
            <p className="text-gray-500 text-center py-12">{t('roster.table.empty')}</p>
          )}
          {!playersLoading && !playersError && players.length > 0 && (
            <div className="overflow-x-auto rounded-xl border border-gray-800">
              <table className="w-full text-left">
                <thead className="bg-gray-900 text-gray-400 text-sm">
                  <tr>
                    <th className="px-4 py-3">{t('roster.fields.jerseyNumber')}</th>
                    <th className="px-4 py-3">{t('roster.fields.firstName')}</th>
                    <th className="px-4 py-3">{t('roster.fields.lastName')}</th>
                    <th className="px-4 py-3">{t('roster.fields.position')}</th>
                    <th className="px-4 py-3 text-right">{t('common.actions')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {players.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-900">
                      <td className="px-4 py-3 font-mono">{p.jerseyNumber}</td>
                      <td className="px-4 py-3">{p.firstName}</td>
                      <td className="px-4 py-3">{p.lastName}</td>
                      <td className="px-4 py-3">
                        {t(`roster.positions.${p.position}`)}
                      </td>
                      <td className="px-4 py-3 text-right space-x-2">
                        <button
                          type="button"
                          onClick={() => openEdit(p)}
                          className="text-violet-300 hover:text-white text-sm"
                        >
                          {t('common.edit')}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(p.id)}
                          disabled={deletingId === p.id}
                          className="text-red-400 hover:text-red-200 text-sm disabled:opacity-50"
                        >
                          {deletingId === p.id ? t('common.deleting') : t('common.delete')}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      {tab === 'leaderboard' && (
        <section className="space-y-4">
          <div className="flex flex-wrap gap-3 items-center">
            <label className="text-sm text-gray-400">
              {t('roster.leaderboard.sortBy')}:{' '}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as LeaderboardSortBy)}
                className="bg-gray-800 border border-gray-700 rounded-md px-2 py-1 text-white"
              >
                {LEADERBOARD_METRICS.map((m) => (
                  <option key={m} value={m}>
                    {t(`roster.leaderboard.metrics.${m}`)}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm text-gray-400">
              {t('roster.leaderboard.mode')}:{' '}
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value as LeaderboardMode)}
                className="bg-gray-800 border border-gray-700 rounded-md px-2 py-1 text-white"
              >
                {LEADERBOARD_MODES.map((m) => (
                  <option key={m} value={m}>
                    {t(`roster.leaderboard.modes.${m}`)}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {leaderboardLoading && (
            <p className="text-gray-400 text-center py-8">{t('common.loading')}</p>
          )}
          {leaderboardError && !leaderboardLoading && (
            <div className="px-4 py-3 bg-red-900/40 border border-red-700/60 rounded-lg text-red-400 text-center">
              {leaderboardError}
            </div>
          )}
          {!leaderboardLoading && !leaderboardError && leaderboard && (
            <div className="overflow-x-auto rounded-xl border border-gray-800">
              <table className="w-full text-left">
                <thead className="bg-gray-900 text-gray-400 text-sm">
                  <tr>
                    <th className="px-4 py-3 w-12">{t('roster.leaderboard.columns.rank')}</th>
                    <th className="px-4 py-3">{t('roster.leaderboard.columns.player')}</th>
                    <th className="px-4 py-3 text-right">{t('roster.leaderboard.columns.display')}</th>
                    <th className="px-4 py-3 text-right">{t('roster.leaderboard.columns.raw')}</th>
                    <th className="px-4 py-3 text-right">{t('roster.leaderboard.columns.matches')}</th>
                    <th className="px-4 py-3 text-right">{t('roster.leaderboard.columns.points')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {leaderboard.rows.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                        {t('roster.leaderboard.empty')}
                      </td>
                    </tr>
                  )}
                  {leaderboard.rows.map((row, idx) => (
                    <tr key={row.playerId} className="hover:bg-gray-900">
                      <td className="px-4 py-3 font-mono text-gray-500">{idx + 1}</td>
                      <td className="px-4 py-3">
                        #{row.jerseyNumber} {row.firstName} {row.lastName}
                      </td>
                      <td className="px-4 py-3 text-right font-mono">
                        {formatDisplay(row.displayValue)}
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-gray-500">
                        {row.rawValue}
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-gray-500">
                        {row.matchesPlayed}
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-gray-500">
                        {row.pointsPlayed}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      {modalMode && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl w-full max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-5">
              {modalMode === 'add' ? t('roster.modal.add.title') : t('roster.modal.edit.title')}
            </h2>
            {formError && (
              <div className="mb-4 px-4 py-2.5 bg-red-900/40 border border-red-700/60 rounded-lg text-red-400 text-sm text-center">
                {formError}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Field label={t('roster.fields.firstName')}>
                  <input
                    required
                    value={form.firstName}
                    onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                    className="input"
                  />
                </Field>
                <Field label={t('roster.fields.lastName')}>
                  <input
                    required
                    value={form.lastName}
                    onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                    className="input"
                  />
                </Field>
                <Field label={t('roster.fields.jerseyNumber')}>
                  <input
                    required
                    type="number"
                    min="0"
                    value={form.jerseyNumber}
                    onChange={(e) => setForm((f) => ({ ...f, jerseyNumber: e.target.value }))}
                    className="input"
                  />
                </Field>
                <Field label={t('roster.fields.position')}>
                  <select
                    value={form.position}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, position: e.target.value as PlayerPosition }))
                    }
                    className="input"
                  >
                    {POSITIONS.map((p) => (
                      <option key={p} value={p}>
                        {t(`roster.positions.${p}`)}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <Field label={t('roster.fields.photoUrl')}>
                <input
                  type="url"
                  value={form.photoUrl}
                  onChange={(e) => setForm((f) => ({ ...f, photoUrl: e.target.value }))}
                  className="input"
                />
              </Field>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={submitting}
                  className="flex-1 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg disabled:opacity-50"
                >
                  {t('common.cancel')}
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-2.5 bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 rounded-lg font-semibold"
                >
                  {submitting
                    ? t('common.saving')
                    : modalMode === 'add'
                      ? t('roster.modal.add.submit')
                      : t('roster.modal.edit.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .input {
          width: 100%;
          padding: 0.5rem 0.75rem;
          background: rgb(31, 41, 55);
          border: 1px solid rgb(55, 65, 81);
          border-radius: 0.5rem;
          color: white;
        }
        .input:focus { outline: 2px solid rgb(139, 92, 246); }
      `}</style>
    </div>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm text-gray-400 mb-1">{label}</span>
      {children}
    </label>
  )
}
