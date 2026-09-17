const ACTIVE = { H: 'bg-emerald-600 text-white', S: 'bg-amber-500 text-white', I: 'bg-secondary text-white', A: 'bg-error text-white' };

export function StatusToggle({ value, onChange }) {
  return (
    <div className="flex items-center p-1 bg-surface-container-low rounded-lg border border-surface-container-highest max-w-[230px] mx-auto">
      {['H','S','I','A'].map((k) => (
        <button key={k} onClick={() => onChange(k)} className={`flex-1 py-1.5 rounded-md text-[11px] ${value === k ? `${ACTIVE[k]} font-bold` : 'text-on-surface-variant font-semibold hover:bg-white'}`}>{k}</button>
      ))}
    </div>
  );
}

export function Badge({ status }) {
  if (status === 'S') return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-900 border border-amber-300"><span className="material-symbols-outlined text-[14px]">verified</span>Terverifikasi</span>;
  if (status === 'I') return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-900 border border-blue-200"><span className="material-symbols-outlined text-[14px]">done</span>Disetujui</span>;
  if (status === 'A') return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-error-container text-on-error-container border border-error/30"><span className="material-symbols-outlined text-[14px]">warning</span>Alpa</span>;
  return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>Terdata</span>;
}

export function CellInfo({ s }) {
  if (s.status === 'S') return <div className="flex flex-col gap-0.5"><span className="text-[12px] font-semibold text-amber-900 flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-amber-600">note_alt</span>{s.keterangan || 'Sakit'}</span>{s.lampiran && <span className="text-[11px] text-secondary flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">attachment</span>{s.lampiran}</span>}</div>;
  if (s.status === 'I') return <div className="flex flex-col gap-0.5"><span className="text-[12px] font-semibold text-on-surface flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-secondary">family_restroom</span>{s.keterangan || 'Izin'}</span><span className="text-[11px] text-outline truncate">{s.subKeterangan || 'Izin orang tua'}</span></div>;
  if (s.status === 'A') return <span className="text-[12px] font-semibold text-error flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">warning</span>Tanpa keterangan</span>;
  return <div className="flex items-center gap-1.5 text-[12px] text-emerald-800"><span className="material-symbols-outlined text-[16px] text-emerald-600">alarm_on</span><span className="font-medium">{s.waktu || 'Tepat Waktu'}</span></div>;
}
