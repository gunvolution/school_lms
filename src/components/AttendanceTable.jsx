import { StatusToggle, Badge, CellInfo } from './cells';

export default function AttendanceTable({ rows, setStatus, page, setPage, perPage, setPerPage, total }) {
  const pages = Math.max(1, Math.ceil(total / perPage));
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
      <div className="px-5 py-3 bg-surface-container-low border-b border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[11px]">
          <span className="font-bold text-on-surface">Daftar Presensi Kelas VIII A</span>
          <span className="text-outline">• {rows.length} dari {total} Siswa</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-semibold flex-wrap">
          <span className="text-outline font-normal">Petunjuk:</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>H</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>S</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>I</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-error"></span>A</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="border-b border-outline-variant text-[11px] text-outline uppercase tracking-wider">
              <th className="py-3.5 px-4 w-12 text-center">No</th>
              <th className="py-3.5 px-4 w-32">NIS / NISN</th>
              <th className="py-3.5 px-4 min-w-[220px]">Nama Lengkap Siswa</th>
              <th className="py-3.5 px-4 min-w-[250px] text-center">Status Kehadiran Cepat</th>
              <th className="py-3.5 px-4 min-w-[240px]">Waktu Masuk &amp; Keterangan</th>
              <th className="py-3.5 px-4 w-36 text-center">Konfirmasi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-high text-[14px]">
            {rows.map((s, i) => (
              <tr key={s.id} className={rowCls(s.status)}>
                <td className="py-3.5 px-4 text-center font-medium text-outline">{(page - 1) * perPage + i + 1}</td>
                <td className="py-3.5 px-4 text-on-surface-variant font-mono text-[12px]">{s.nis}</td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-3">
                    <img alt={s.nama} src={s.avatar} className="w-9 h-9 rounded-full object-cover border border-outline-variant shrink-0" loading="lazy" />
                    <div>
                      <div className="font-semibold text-on-surface flex items-center gap-1.5">
                        <span>{s.nama}</span>
                        <span className={s.gender === 'P' ? 'px-1.5 rounded text-[10px] font-bold bg-pink-100 text-pink-700' : 'px-1.5 rounded text-[10px] font-bold bg-surface-container text-primary'}>{s.gender}</span>
                      </div>
                      <span className="text-[11px] text-outline">No. Absen: {s.noAbsen}</span>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4"><StatusToggle value={s.status} onChange={(v) => setStatus(s.id, v)} /></td>
                <td className="py-3.5 px-4"><CellInfo s={s} /></td>
                <td className="py-3.5 px-4 text-center"><Badge status={s.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-5 py-3.5 border-t border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-outline">
        <div className="flex items-center gap-2 font-semibold">
          <span>Tampilkan</span>
          <select value={perPage} onChange={(e) => { setPerPage(Number(e.target.value)); setPage(1); }} className="h-8 px-2 border border-outline-variant rounded-md text-on-surface">
            <option value={8}>8</option><option value={10}>10</option><option value={25}>25</option>
          </select>
          <span>• Total {total} siswa</span>
        </div>
        <div className="flex items-center gap-1">
          <button disabled={page <= 1} onClick={() => setPage(page - 1)} className="w-8 h-8 rounded-md border border-outline-variant flex items-center justify-center disabled:opacity-40"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
          {[1,2,3,4].filter((n) => n <= pages).map((n) => (
            <button key={n} onClick={() => setPage(n)} className={page === n ? 'w-8 h-8 rounded-md bg-secondary text-white font-bold' : 'w-8 h-8 rounded-md border border-outline-variant'}>{n}</button>
          ))}
          <button disabled={page >= pages} onClick={() => setPage(page + 1)} className="w-8 h-8 rounded-md border border-outline-variant flex items-center justify-center disabled:opacity-40"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
        </div>
      </div>
    </div>
  );
}

function rowCls(st) {
  if (st === 'S') return 'bg-amber-50/40 border-l-4 border-amber-500';
  if (st === 'I') return 'bg-blue-50/40 border-l-4 border-secondary';
  if (st === 'A') return 'bg-red-50/50 border-l-4 border-error';
  return 'hover:bg-surface-container-low';
}
