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

interface ErrorResponse { status: 'error'; message: string }

type Tab = 'players' | 'leaderboard'
const POSITIONS: PlayerPosition[] = ['HANDLER', 'CUTTER', 'HYBRID']
const LEADERBOARD_METRICS: LeaderboardSortBy[] = [
  'goals', 'assists', 'blocks', 'throwaways', 'drops',
  'callahans', 'completions', 'plusMinus', 'pointsPlayed', 'matchesPlayed',
]
const LEADERBOARD_MODES: LeaderboardMode[] = ['TOTAL', 'PER_MATCH', 'PER_POINT']

const POSITION_COLORS: Record<PlayerPosition, string> = {
  HANDLER: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
  CUTTER:  'bg-green-500/15 text-green-300 border-green-500/25',
  HYBRID:  'bg-amber-500/15 text-amber-300 border-amber-500/25',
}

interface PlayerFormState {
  firstName: string; lastName: string; position: PlayerPosition
  jerseyNumber: string; photoUrl: string
}
const emptyForm: PlayerFormState = { firstName: '', lastName: '', position: 'HYBRID', jerseyNumber: '', photoUrl: '' }

export default function Roster() {
  const { t } = useTranslation()
  const selectedTeam = useAppStore((s) => s.selectedTeam)
  const [tab, setTab] = useState<Tab>('players')
  const [players, setPlayers] = useState<Player[]>([])
  const [playersLoading, setPlayersLoading] = useState(true)
  const [playersError, setPlayersError] = useState<string | null>(null)
  const [modalMode, setModalMode] = useState<'add' | 'edit' | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<PlayerFormState>(emptyForm)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<LeaderboardSortBy>('goals')
  const [mode, setMode] = useState<LeaderboardMode>('TOTAL')
  const [leaderboard, setLeaderboard] = useState<LeaderboardResponse | null>(null)
  const [leaderboardLoading, setLeaderboardLoading] = useState(false)
  const [leaderboardError, setLeaderboardError] = useState<string | null>(null)

  const teamId = selectedTeam?.id

  const loadPlayers = useCallback(async () => {
    if (!teamId) return
    setPlayersLoading(true); setPlayersError(null)
    try {
      const res = await apiClient.get<{ status: 'success'; data: Player[] }>(`/api/teams/${teamId}/players`)
      setPlayers(res.data.data)
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      setPlayersError(ax.response?.data?.message ?? t('roster.errors.loadFailed'))
    } finally { setPlayersLoading(false) }
  }, [teamId, t])

  const loadLeaderboard = useCallback(async () => {
    if (!teamId) return
    setLeaderboardLoading(true); setLeaderboardError(null)
    try {
      const res = await apiClient.get<{ status: 'success'; data: LeaderboardResponse }>(
        `/api/teams/${teamId}/leaderboard`, { params: { sortBy, mode } }
      )
      setLeaderboard(res.data.data)
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      setLeaderboardError(ax.response?.data?.message ?? t('roster.errors.leaderboardFailed'))
    } finally { setLeaderboardLoading(false) }
  }, [teamId, sortBy, mode, t])

  useEffect(() => { loadPlayers() }, [loadPlayers])
  useEffect(() => { if (tab === 'leaderboard') loadLeaderboard() }, [tab, loadLeaderboard])

  const openAdd = () => { setForm(emptyForm); setEditingId(null); setFormError(null); setModalMode('add') }
  const openEdit = (p: Player) => {
    setForm({ firstName: p.firstName, lastName: p.lastName, position: p.position,
      jerseyNumber: String(p.jerseyNumber), photoUrl: p.photoUrl ?? '' })
    setEditingId(p.id); setFormError(null); setModalMode('edit')
  }
  const closeModal = () => { setModalMode(null); setEditingId(null); setForm(emptyForm); setFormError(null) }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!teamId) return
    setSubmitting(true); setFormError(null)
    const payload = {
      firstName: form.firstName.trim(), lastName: form.lastName.trim(),
      position: form.position, jerseyNumber: Number(form.jerseyNumber),
      photoUrl: form.photoUrl.trim() || null,
    }
    try {
      if (modalMode === 'add') await apiClient.post(`/api/teams/${teamId}/players`, payload)
      else if (modalMode === 'edit' && editingId) await apiClient.put(`/api/players/${editingId}`, payload)
      closeModal(); await loadPlayers()
    } catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      setFormError(ax.response?.data?.message ?? t('roster.errors.saveFailed'))
    } finally { setSubmitting(false) }
  }

  const handleDelete = async (id: string) => {
    if (!window.confirm(t('roster.modal.delete.message'))) return
    setDeletingId(id)
    try { await apiClient.delete(`/api/players/${id}`); await loadPlayers() }
    catch (err) {
      const ax = err as AxiosError<ErrorResponse>
      alert(ax.response?.data?.message ?? t('roster.errors.deleteFailed'))
    } finally { setDeletingId(null) }
  }

  const tabBtnCls = (active: boolean) => [
    'px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150',
    active
      ? 'bg-green-500 text-white shadow-lg shadow-green-500/20'
      : 'bg-white/[0.05] text-slate-400 hover:bg-white/[0.08] hover:text-slate-200',
  ].join(' ')

  const formatDisplay = useMemo(() => (n: number) => Number.isInteger(n) ? String(n) : n.toFixed(2), [])

  const rankColors = ['text-yellow-400', 'text-slate-300', 'text-amber-600']

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-white tracking-tight">{t('roster.title')}</h1>
          {!playersLoading && (
            <span className="px-2.5 py-0.5 bg-white/[0.06] border border-white/[0.08] rounded-full text-xs text-slate-400 font-mono">
              {players.length}
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => setTab('players')} className={tabBtnCls(tab === 'players')}>
            {t('roster.tabs.players')}
          </button>
          <button type="button" onClick={() => setTab('leaderboard')} className={tabBtnCls(tab === 'leaderboard')}>
            {t('roster.tabs.leaderboard')}
          </button>
        </div>
      </div>

      {tab === 'players' && (
        <section className="space-y-4">
          <div className="flex justify-end">
            <button type="button" onClick={openAdd}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-green-500/20">
              <span aria-hidden="true">+</span>
              {t('roster.table.addButton')}
            </button>
          </div>

          {playersLoading && (
            <div className="flex items-center justify-center py-12">
              <div className="w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          {playersError && !playersLoading && (
            <div className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center">{playersError}</div>
          )}
          {!playersLoading && !playersError && players.length === 0 && (
            <div className="py-16 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-2xl mb-4">👤</div>
              <p className="text-slate-500 mb-4 text-sm">{t('roster.table.empty')}</p>
              <button type="button" onClick={openAdd}
                className="px-4 py-2 bg-green-500 hover:bg-green-400 text-white rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-green-500/20">
                {t('roster.table.addButton')}
              </button>
            </div>
          )}
          {!playersLoading && !playersError && players.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {players.map((p) => (
                <div key={p.id} className="bg-[#0f1117] border border-white/[0.08] rounded-2xl p-4 flex flex-col gap-3 hover:border-white/[0.14] transition-all">
                  <div className="flex items-center gap-3">
                    {p.photoUrl ? (
                      <img
                        src={p.photoUrl}
                        alt={t('roster.card.photoAlt', { name: `${p.firstName} ${p.lastName}` })}
                        className="w-14 h-14 rounded-xl object-cover border border-white/[0.08] shrink-0"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                        <span className="text-xl font-bold text-slate-500 select-none">
                          {p.firstName.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-slate-100 truncate">{p.firstName} {p.lastName}</p>
                      <span className={`inline-flex items-center mt-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${POSITION_COLORS[p.position]}`}>
                        {t(`roster.positions.${p.position}`)}
                      </span>
                    </div>
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 font-mono text-sm font-bold text-green-400 shrink-0">
                      {p.jerseyNumber}
                    </span>
                  </div>
                  <div className="flex gap-2 pt-1 border-t border-white/[0.06]">
                    <button
                      type="button"
                      onClick={() => openEdit(p)}
                      className="flex-1 py-1.5 text-sm font-medium text-green-400 hover:text-green-300 hover:bg-green-500/[0.08] rounded-lg transition-colors"
                    >
                      {t('common.edit')}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(p.id)}
                      disabled={deletingId === p.id}
                      className="flex-1 py-1.5 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/[0.08] rounded-lg disabled:opacity-50 transition-colors"
                    >
                      {deletingId === p.id ? t('common.deleting') : t('common.delete')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {tab === 'leaderboard' && (
        <section className="space-y-4">
          <div className="flex flex-wrap gap-4 items-center p-4 bg-[#0f1117] border border-white/[0.08] rounded-xl">
            <label className="flex items-center gap-2 text-sm text-slate-400">
              {t('roster.leaderboard.sortBy')}
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value as LeaderboardSortBy)}
                className="bg-[#090c10] border border-white/[0.10] rounded-lg px-2.5 py-1.5 text-slate-200 text-sm focus:outline-none focus:border-green-500/60">
                {LEADERBOARD_METRICS.map((m) => (
                  <option key={m} value={m}>{t(`roster.leaderboard.metrics.${m}`)}</option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-400">
              {t('roster.leaderboard.mode')}
              <select value={mode} onChange={(e) => setMode(e.target.value as LeaderboardMode)}
                className="bg-[#090c10] border border-white/[0.10] rounded-lg px-2.5 py-1.5 text-slate-200 text-sm focus:outline-none focus:border-green-500/60">
                {LEADERBOARD_MODES.map((m) => (
                  <option key={m} value={m}>{t(`roster.leaderboard.modes.${m}`)}</option>
                ))}
              </select>
            </label>
          </div>

          {leaderboardLoading && (
            <div className="flex items-center justify-center py-12">
              <div className="w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          {leaderboardError && !leaderboardLoading && (
            <div className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center">{leaderboardError}</div>
          )}
          {!leaderboardLoading && !leaderboardError && leaderboard && (
            <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
              <table className="w-full text-left">
                <thead className="bg-[#0f1117] text-slate-500 text-xs uppercase tracking-wider border-b border-white/[0.06]">
                  <tr>
                    <th className="px-4 py-3 w-12 font-semibold">{t('roster.leaderboard.columns.rank')}</th>
                    <th className="px-4 py-3 font-semibold">{t('roster.leaderboard.columns.player')}</th>
                    <th className="px-4 py-3 text-right font-semibold">{t('roster.leaderboard.columns.display')}</th>
                    <th className="px-4 py-3 text-right font-semibold hidden sm:table-cell">{t('roster.leaderboard.columns.raw')}</th>
                    <th className="px-4 py-3 text-right font-semibold hidden sm:table-cell">{t('roster.leaderboard.columns.matches')}</th>
                    <th className="px-4 py-3 text-right font-semibold hidden sm:table-cell">{t('roster.leaderboard.columns.points')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {leaderboard.rows.length === 0 && (
                    <tr><td colSpan={6} className="px-4 py-8 text-center text-slate-500 text-sm">{t('roster.leaderboard.empty')}</td></tr>
                  )}
                  {leaderboard.rows.map((row, idx) => (
                    <tr key={row.playerId} className={`hover:bg-white/[0.02] transition-colors ${idx < 3 ? 'bg-white/[0.015]' : ''}`}>
                      <td className="px-4 py-3">
                        <span className={`font-bold text-lg ${rankColors[idx] ?? 'text-slate-600'}`}>
                          {idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : idx + 1}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-green-500/10 border border-green-500/20 font-mono text-xs font-bold text-green-400">
                            {row.jerseyNumber}
                          </span>
                          <span className="font-medium text-slate-100">{row.firstName} {row.lastName}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-green-400 font-bold text-lg tabular-nums">
                        {formatDisplay(row.displayValue)}
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-slate-500 text-sm hidden sm:table-cell tabular-nums">{row.rawValue}</td>
                      <td className="px-4 py-3 text-right font-mono text-slate-500 text-sm hidden sm:table-cell tabular-nums">{row.matchesPlayed}</td>
                      <td className="px-4 py-3 text-right font-mono text-slate-500 text-sm hidden sm:table-cell tabular-nums">{row.pointsPlayed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      {modalMode && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4" onClick={closeModal}>
          <div className="bg-[#0f1117] border border-white/[0.08] rounded-2xl shadow-2xl w-full max-w-md p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold text-white mb-5">
              {modalMode === 'add' ? t('roster.modal.add.title') : t('roster.modal.edit.title')}
            </h2>
            {formError && (
              <div className="mb-4 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">{formError}</div>
            )}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Field label={t('roster.fields.firstName')}>
                  <input required value={form.firstName} onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))} className="field-input" />
                </Field>
                <Field label={t('roster.fields.lastName')}>
                  <input required value={form.lastName} onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))} className="field-input" />
                </Field>
                <Field label={t('roster.fields.jerseyNumber')}>
                  <input required type="number" min="0" value={form.jerseyNumber}
                    onChange={(e) => setForm((f) => ({ ...f, jerseyNumber: e.target.value }))} className="field-input" />
                </Field>
                <Field label={t('roster.fields.position')}>
                  <select value={form.position} onChange={(e) => setForm((f) => ({ ...f, position: e.target.value as PlayerPosition }))} className="field-input">
                    {POSITIONS.map((p) => <option key={p} value={p}>{t(`roster.positions.${p}`)}</option>)}
                  </select>
                </Field>
              </div>
              <Field label={t('roster.fields.photoUrl')}>
                <input type="url" value={form.photoUrl} onChange={(e) => setForm((f) => ({ ...f, photoUrl: e.target.value }))} className="field-input" />
              </Field>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={closeModal} disabled={submitting}
                  className="flex-1 py-2.5 bg-white/[0.06] hover:bg-white/[0.09] text-slate-300 font-medium rounded-xl disabled:opacity-50 transition-colors">
                  {t('common.cancel')}
                </button>
                <button type="submit" disabled={submitting}
                  className="flex-1 py-2.5 bg-green-500 hover:bg-green-400 disabled:bg-green-900 disabled:text-green-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-green-500/20">
                  {submitting ? t('common.saving') : modalMode === 'add' ? t('roster.modal.add.submit') : t('roster.modal.edit.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{label}</span>
      {children}
    </label>
  )
}
