export default function MonthlyRecap({ students }) {
  const days = ['01','02','03','06','07','08','09','10','13','14'];
  const code = (s, d) => {
    if (s.status === 'S' && (d === '03' || d === '07')) return 'S';
    if (s.status === 'I' && (d === '06' || d === '14')) return 'I';
    if (s.status === 'A') return 'A';
    if ((s.id + Number(d)) % 17 === 0) return 'S';
    if ((s.id + Number(d)) % 23 === 0) return 'I';
    return 'H';
  };
  const pill = (c) => c === 'H' ? 'w-7 h-7 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200 text-[11px] font-bold flex items-center justify-center' : c === 'S' ? 'w-7 h-7 rounded-md bg-amber-100 text-amber-900 border border-amber-300 text-[11px] font-bold flex items-center justify-center' : c === 'I' ? 'w-7 h-7 rounded-md bg-blue-100 text-blue-900 border border-blue-200 text-[11px] font-bold flex items-center justify-center' : 'w-7 h-7 rounded-md bg-error-container text-on-error-container border border-error/30 text-[11px] font-bold flex items-center justify-center';
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div><h3 className="text-[14px] font-bold">Rekap Bulanan — Oktober 2024 • Kelas VIII A</h3><p className="text-[12px] text-outline">H=Hadir • S=Sakit • I=Izin • A=Alpa — terhubung otomatis ke e-Rapor</p></div>
        <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-outline-variant text-[12px] font-semibold hover:bg-surface-container-low"><span className="material-symbols-outlined text-[16px]">download</span>Unduh Excel</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px] text-left border-collapse">
          <thead><tr className="border-b border-outline-variant text-[11px] text-outline uppercase">
            <th className="py-3 px-4">Siswa</th>
            {days.map((d) => <th key={d} className="py-3 px-2 text-center">{d}</th>)}
            <th className="py-3 px-4 text-center">% Hadir</th>
          </tr></thead>
          <tbody className="divide-y divide-surface-container-high text-[13px]">
            {students.slice(0, 12).map((s) => {
              const codes = days.map((d) => code(s, d));
              const pct = Math.round((codes.filter((c) => c === 'H').length / days.length) * 100);
              return <tr key={s.id} className="hover:bg-surface-container-low"><td className="py-2.5 px-4"><div className="flex items-center gap-2"><img src={s.avatar} alt={s.nama} className="w-7 h-7 rounded-full object-cover border border-outline-variant" loading="lazy" /><span className="font-semibold">{s.nama}</span></div></td>{codes.map((c, i) => <td key={i} className="py-2.5 px-2 text-center"><span className={pill(c)}>{c}</span></td>)}<td className="py-2.5 px-4 text-center font-bold">{pct}%</td></tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
