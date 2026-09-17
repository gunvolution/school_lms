import { NAV_ITEMS } from '../data/meta';

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 hidden md:flex flex-col z-30 bg-surface-container-lowest border-r border-outline-variant shadow-sm">
      <div className="w-64 h-full flex flex-col justify-between p-4 overflow-y-auto">
        <div>
          <div className="flex items-center gap-3 px-2 py-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center shadow-sm shrink-0">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-[16px] leading-6 font-semibold text-primary tracking-wide truncate">SIAKAD Pintar</span>
              <span className="text-[11px] font-semibold text-outline">SMP Negeri 1 Surabaya</span>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-lg p-3 mb-4 flex items-center gap-3 border border-surface-container-highest">
            <img alt="Gunawan - Guru SMP" className="w-10 h-10 rounded-full object-cover border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFPDWGE6-W49_cnvIoz_Gk-r3sZa7IUG1RLVuv08CiR1a8Ti2prKCMRNLmSA3Q8_DhbTZcloxQ3DoBRjB0scXHlDkL9DIWl8lZKeFA_2DHmD4k5q5oohjdHw5xodrQOGKLCFE603zxFqnZqC0CDTlTIZlKfujqbjwyjdjarx__M2fxSTt2lZb5tyxazZoRhXvLQFojPYB_lwZuO-U6_Qddfu8iaamr7KxtkiiFCmVQ0Po54ux3jx2yWg" />
            <div className="flex flex-col min-w-0">
              <span className="text-[14px] font-semibold text-on-surface truncate">Gunawan, S.Pd.</span>
              <span className="text-[12px] text-on-surface-variant truncate">Guru Matematika SMP</span>
            </div>
          </div>
          <nav className="space-y-1">
            {NAV_ITEMS.map((n) => (
              <a key={n.label} href="#" onClick={(e) => e.preventDefault()}
                className={n.active
                  ? 'flex items-center gap-3 px-3 py-2.5 rounded-lg bg-surface-container-low text-primary font-semibold border-l-4 border-secondary'
                  : 'flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors'}>
                <span className={`material-symbols-outlined text-[20px] ${n.active ? 'text-secondary' : ''}`} style={n.active ? { fontVariationSettings: "'FILL' 1" } : undefined}>{n.icon}</span>
                <span className={`text-[13px] ${n.active ? 'font-bold' : 'font-medium'}`}>{n.label}</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="pt-4 border-t border-surface-container-high space-y-1">
          <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low">
            <span className="material-symbols-outlined text-[20px]">help_outline</span>
            <span className="text-[13px] font-medium">Bantuan</span>
          </a>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-error hover:bg-error-container/40">
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <span className="text-[13px] font-semibold">Keluar</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
