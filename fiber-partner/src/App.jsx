import { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, Check, CheckCircle2,
  ChevronDown, ChevronRight, ClipboardCheck, HeartHandshake, Menu,
  MessageCircle, Send, ShieldCheck, Signal, Sparkles, TrendingUp,
  Users, Wallet, Wifi, X,
} from 'lucide-react';
import { SITE_CONFIG } from './config.js';

const money = (amount) => new Intl.NumberFormat('th-TH').format(amount);
const blankLead = {
  agentName: '', agentPhone: '', customerName: '', customerPhone: '',
  province: '', district: '', installAddress: '', provider: '', notes: '',
};
const faqItems = [
  {
    q: 'แนะนำลูกค้า 1 คน ได้รับเงินเมื่อไหร่?',
    a: 'ค่าตอบแทน 100 บาทจะเกิดขึ้นเมื่อเคสติดตั้งอินเทอร์เน็ตสำเร็จ และผู้ดูแลตรวจสอบว่าผ่านเงื่อนไขแล้ว รอบการจ่ายเงินต้องแจ้งให้ผู้แนะนำทราบก่อนเริ่มงาน',
  },
  {
    q: 'ต้องเป็นพนักงานขายอินเทอร์เน็ตไหม?',
    a: 'ไม่จำเป็นต้องเป็นพนักงานขาย เพียงแนะนำผู้ที่สนใจและได้รับอนุญาตจากลูกค้าก่อนส่งข้อมูล จากนั้นผู้ดูแลจะประสานงานตามกระบวนการ',
  },
  {
    q: 'ถ้าลูกค้ายกเลิก หรือส่งข้อมูลซ้ำ จะได้ค่าตอบแทนไหม?',
    a: 'ไม่ได้รับค่าตอบแทนสำหรับเคสที่ไม่ได้ติดตั้งสำเร็จ และเคสที่ข้อมูลซ้ำหรือไม่ผ่านเงื่อนไขการตรวจสอบ โดยผู้ดูแลควรระบุกติกาและวิธีตัดสินสิทธิ์ให้ชัดเจน',
  },
  {
    q: 'สามารถแนะนำลูกค้าต่างจังหวัดได้หรือไม่?',
    a: 'ส่งข้อมูลเพื่อให้ตรวจสอบพื้นที่บริการได้ แต่การติดตั้งขึ้นอยู่กับความพร้อมของเครือข่ายและผู้ให้บริการในที่อยู่นั้น ๆ',
  },
];

function Logo({ light = false }) {
  return (
    <a href="#home" aria-label="Fiber Partner กลับหน้าแรก" className="group flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#18b1f5] to-[#0873d2] text-white shadow-[0_6px_16px_rgba(3,125,220,.22)] transition-transform group-hover:scale-105">
        <Wifi size={24} strokeWidth={2.7} />
      </span>
      <span className={`text-[20px] font-bold tracking-tight ${light ? 'text-white' : 'text-[#152c43]'}`}>
        Fiber<span className={light ? 'text-[#7ed8ff]' : 'text-[#087bd2]'}>Partner</span>
      </span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ['#how', 'ขั้นตอนการทำงาน'],
    ['#benefits', 'จุดเด่น'],
    ['#faq', 'คำถามที่พบบ่อย'],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-[#eaf1f8] bg-white/95 backdrop-blur-xl">
      <div className="container-site flex h-[76px] items-center justify-between gap-5">
        <Logo />
        <nav aria-label="เมนูหลัก" className="hidden items-center gap-9 lg:flex">
          {links.map(([href, text]) => (
            <a key={href} className="nav-link" href={href}>{text}</a>
          ))}
        </nav>
        <a className="btn-primary hidden !px-5 !py-3 text-sm sm:inline-flex" href="#refer">
          ส่งข้อมูลลูกค้า <ArrowUpRight size={17} />
        </a>
        <button aria-label={open ? 'ปิดเมนู' : 'เปิดเมนู'} aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-xl border border-slate-200 p-2 text-slate-700 lg:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="เมนูมือถือ" className="border-t border-slate-100 bg-white px-6 py-4 lg:hidden">
          {links.map(([href, text]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-sky-50">{text}</a>)}
          <a href="#refer" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full justify-center">ส่งข้อมูลลูกค้า <ArrowRight size={18} /></a>
        </nav>
      )}
    </header>
  );
}

function DecoRouter() {
  return (
    <div className="router-art" aria-hidden="true">
      <div className="router-glow" />
      <span className="router-wifi router-wifi-outer" />
      <span className="router-wifi router-wifi-mid" />
      <span className="router-wifi router-wifi-inner" />
      <span className="router-wifi-dot" />
      <span className="router-antenna router-antenna-left" />
      <span className="router-antenna router-antenna-right" />
      <div className="router-box">
        <span className="router-indicator" /><span className="router-indicator" /><span className="router-indicator" />
        <span className="router-brand"><Wifi size={13} strokeWidth={3} /> FIBER</span>
      </div>
      <div className="router-shadow" />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#f4fbff] via-[#f8fcff] to-white">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="hero-orb pointer-events-none absolute -right-48 top-10 h-[600px] w-[600px] rounded-full" />
      <div className="container-site relative grid items-center gap-10 pb-24 pt-16 lg:grid-cols-[1.04fr_.96fr] lg:gap-16 lg:pb-28 lg:pt-24">
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#cfecfb] bg-white px-4 py-2 text-[12px] font-medium text-[#0877bd] shadow-[0_4px_15px_rgba(10,125,200,.045)] sm:text-sm">
            <Sparkles size={15} className="text-[#12a9e8]" /> โอกาสสร้างรายได้ง่าย ๆ จากการแนะนำเน็ตบ้าน
          </div>
          <h1 className="text-[clamp(2.55rem,5vw,4.25rem)] font-bold leading-[1.31] tracking-[-.045em] text-[#102b46]">
            รู้จักคนอยากติดเน็ต?<br />
            <span className="gradient-word">แนะนำสำเร็จ รับ 100 บาท*</span>
          </h1>
          <p className="mt-6 max-w-[535px] text-[16px] leading-[2.05] text-[#63778b] sm:text-[17px]">
            เปลี่ยนการบอกต่อให้เป็นรายได้ เพียงส่งข้อมูลผู้สนใจติดตั้งอินเทอร์เน็ตบ้าน แล้วรับค่าตอบแทน <strong className="font-semibold text-[#16354f]">100 บาทต่อเคสที่ติดตั้งสำเร็จ</strong>
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#refer" className="btn-primary !px-7 !py-4">เริ่มส่งข้อมูลลูกค้า <ArrowRight size={19} /></a>
            <a href="#how" className="btn-outline !px-6 !py-4">ดูขั้นตอนการทำงาน <ArrowDown size={17} /></a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-[13px] font-medium text-[#6d8292]">
            <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-[#0bb5a0]" /> กรอกข้อมูลได้ง่าย</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-[#0bb5a0]" /> ไม่ต้องติดตั้งเอง</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-[#0bb5a0]" /> ยืนยันหลังติดตั้งสำเร็จ</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[540px] lg:ml-auto">
          <div className="absolute -left-6 -top-8 h-36 w-36 rounded-full bg-[#bcecff]/40 blur-[45px]" />
          <div className="hero-card relative overflow-hidden rounded-[34px] border border-white bg-white p-5 shadow-float sm:p-7">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#627f98]"><span className="h-2 w-2 rounded-full bg-[#17bf9f]" /> FIBER REFERRAL</span>
              <span className="rounded-full bg-[#effaf6] px-3 py-1 text-[11px] font-semibold text-[#159b75]">สร้างรายได้จากการแนะนำ</span>
            </div>
            <div className="relative mt-5 min-h-[265px] overflow-hidden rounded-[27px] bg-gradient-to-b from-[#e9f8ff] to-[#cbefff] sm:min-h-[305px]">
              <div className="absolute -right-10 -top-24 h-72 w-72 rounded-full border-[45px] border-white/40" />
              <div className="absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-white/35 blur-2xl" />
              <div className="absolute left-5 top-5 rounded-full border border-white/80 bg-white/70 px-3 py-1.5 text-[11px] font-medium text-[#3795bf] backdrop-blur">เชื่อมต่อทุกโอกาส ✦</div>
              <DecoRouter />
              <div className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-[0_8px_23px_rgba(49,125,158,.1)] backdrop-blur">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e4f7fc] text-[#0998cd]"><Signal size={18} /></span>
                <span><span className="block text-[11px] text-[#7890a2]">Fiber connection</span><span className="block text-[13px] font-semibold text-[#143e5b]">พร้อมเชื่อมต่อบ้านใหม่</span></span>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl bg-[#f5faff] px-5 py-4">
              <div>
                <p className="text-[12px] font-medium text-[#7a90a1]">ค่าตอบแทนต่อเคสสำเร็จ</p>
                <p className="mt-1 font-numbers text-[35px] font-extrabold leading-none tracking-[-.04em] text-[#087bd2]">฿100<span className="ml-2 font-sans text-sm font-normal tracking-normal text-[#7890a1]">/ เคส</span></p>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0caad5] shadow-sm"><Wallet size={23} /></span>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-[#dcf2ef] bg-white px-4 py-3 shadow-[0_15px_40px_rgba(31,107,110,.1)] sm:flex lg:-left-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#e9faf3] text-[#12ae85]"><Check size={22} strokeWidth={2.8}/></span>
            <span className="text-xs font-medium leading-5 text-[#647d8c]">ติดตั้งสำเร็จ<br /><strong className="text-sm text-[#173850]">รับค่าตอบแทน</strong></span>
          </div>
        </div>
      </div>
      <p className="container-site relative -mt-6 pb-9 text-[11px] text-[#93a4b2]">*ค่าตอบแทนจ่ายเฉพาะเคสที่ติดตั้งสำเร็จและผ่านการตรวจสอบตามเงื่อนไข</p>
    </section>
  );
}

function SectionTitle({ badge, title, desc }) {
  return (
    <div className="mx-auto mb-12 max-w-[700px] text-center">
      <span className="section-badge">{badge}</span>
      <h2 className="mt-4 text-[clamp(1.85rem,3.2vw,2.6rem)] font-bold leading-[1.4] tracking-[-.025em] text-[#142f48]">{title}</h2>
      {desc && <p className="mx-auto mt-3 max-w-[620px] text-[15px] leading-[1.95] text-[#718598]">{desc}</p>}
    </div>
  );
}

function How() {
  const steps = [
    { icon: Users, tag: 'STEP 01', title: 'รู้จักคนที่สนใจติดเน็ต', desc: 'สอบถามผู้ที่กำลังมองหาอินเทอร์เน็ตบ้าน และขออนุญาตส่งข้อมูลติดต่อก่อนเสมอ' },
    { icon: Send, tag: 'STEP 02', title: 'กรอกข้อมูลผ่านเว็บไซต์', desc: 'แจ้งข้อมูลผู้แนะนำ ชื่อและเบอร์ลูกค้า พร้อมพื้นที่ที่ต้องการติดตั้งได้ทันที' },
    { icon: BadgeCheck, tag: 'STEP 03', title: 'ติดตั้งสำเร็จ รับ 100 บาท', desc: 'เมื่อการติดตั้งเสร็จเรียบร้อยและผ่านการตรวจสอบ จึงมีสิทธิ์รับค่าตอบแทน' },
  ];
  return (
    <section id="how" className="section-space bg-white">
      <div className="container-site">
        <SectionTitle badge="HOW IT WORKS" title="3 ขั้นตอนง่าย ๆ เริ่มสร้างรายได้" desc="ไม่ต้องมีทีมช่าง ไม่ต้องติดตั้งเอง แค่แนะนำผู้สนใจและให้ทีมงานประสานงานต่อ" />
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map(({ icon: Icon, tag, title, desc }, idx) => (
            <div key={tag} className="step-card relative rounded-[24px] border border-[#e7f0f6] bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-float">
              <span className="absolute right-6 top-5 font-numbers text-[42px] font-extrabold text-[#edf5fc]">0{idx + 1}</span>
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#e8f7ff] text-[#128dd0]"><Icon size={29} strokeWidth={1.9} /></div>
              <p className="mb-2 font-numbers text-[11px] font-bold tracking-[.17em] text-[#0e92d6]">{tag}</p>
              <h3 className="text-[18px] font-semibold text-[#1a354c]">{title}</h3>
              <p className="mt-3 text-[14px] leading-[1.9] text-[#778b9a]">{desc}</p>
              {idx < 2 && <span className="absolute -right-4 top-[47%] z-10 hidden h-8 w-8 items-center justify-center rounded-full border border-[#c9eafd] bg-white text-[#0e95dd] md:flex"><ChevronRight size={17}/></span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const features = [
    { icon: HeartHandshake, title: 'แนะนำง่าย', desc: 'มีคนรู้จักต้องการติดตั้งเน็ตบ้านก็ส่งข้อมูลเข้ามาได้เลย' },
    { icon: ClipboardCheck, title: 'ข้อมูลเป็นระบบ', desc: 'รายละเอียดผู้แนะนำและลูกค้าอยู่ในแบบฟอร์มเดียว ลดการตกหล่น' },
    { icon: ShieldCheck, title: 'เงื่อนไขชัดเจน', desc: 'คิดค่าตอบแทนตามเคสที่ติดตั้งสำเร็จและตรวจสอบผ่านเท่านั้น' },
  ];
  return (
    <section id="benefits" className="section-space bg-[#f6fbff]">
      <div className="container-site">
        <SectionTitle badge="WHY FIBER PARTNER" title="บอกต่อได้ง่าย สบายใจกว่าเดิม" desc="ช่องทางเดียวสำหรับส่งข้อมูลลูกค้าที่สนใจ ให้ขั้นตอนแนะนำเน็ตบ้านสะดวกและเป็นระบบ" />
        <div className="grid gap-5 md:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-[22px] border border-[#e2f0fa] bg-white px-7 py-8 shadow-[0_6px_20px_rgba(25,86,133,.04)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9f6ff] text-[#0c83cb]"><Icon size={24} strokeWidth={1.9}/></div>
              <h3 className="text-[17px] font-semibold text-[#143450]">{title}</h3>
              <p className="mt-2 text-[14px] leading-[1.9] text-[#788c9c]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Calculator() {
  const [count, setCount] = useState(10);
  const amount = count * SITE_CONFIG.rewardPerInstallation;
  return (
    <section className="bg-white py-8 sm:py-12" aria-label="เครื่องคำนวณค่าตอบแทน">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-[29px] bg-gradient-to-r from-[#0b79c8] to-[#06a3e4] px-6 py-9 text-white sm:px-12 sm:py-12 lg:px-16">
          <div className="absolute -right-12 -top-28 h-72 w-72 rounded-full border-[45px] border-white/10" />
          <div className="absolute -bottom-40 right-40 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid items-center gap-9 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-medium"><TrendingUp size={14}/> ลองคำนวณรายได้</div>
              <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-semibold leading-[1.5]">แนะนำมากขึ้น<br />โอกาสสร้างรายได้ก็มากขึ้น</h2>
              <p className="mt-3 text-[13px] leading-[1.9] text-[#d5f0ff]">ปรับจำนวนเคสที่ติดตั้งสำเร็จ เพื่อดูตัวอย่างค่าตอบแทน</p>
            </div>
            <div className="rounded-[22px] border border-white/25 bg-white/15 p-6 backdrop-blur-sm sm:p-7">
              <div className="flex items-center justify-between text-[13px]">
                <label htmlFor="install-count" className="text-[#dff6ff]">จำนวนเคสที่ติดตั้งสำเร็จ</label>
                <span className="font-numbers text-lg font-bold">{count} <span className="font-sans text-xs font-normal">เคส</span></span>
              </div>
              <input id="install-count" className="range-slider mt-5 w-full cursor-pointer" type="range" min="1" max="30" step="1" value={count} onChange={(e) => setCount(Number(e.target.value))} style={{ '--progress': `${((count - 1) / 29) * 100}%` }} />
              <div className="mt-6 flex items-end justify-between gap-3 border-t border-white/20 pt-5">
                <span className="pb-1 text-sm text-[#daf3ff]">รายได้โดยประมาณ</span>
                <span className="font-numbers text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-[-.04em]">฿{money(amount)}</span>
              </div>
              <p className="mt-2 text-[11px] text-[#d6effe]">* เป็นเพียงตัวอย่าง ไม่ใช่การรับประกันจำนวนเคสหรือรายได้จริง</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, required, value, onChange, placeholder, type = 'text', inputMode, autoComplete, maxLength }) {
  return (
    <label className="form-label">
      <span>{label}{required && <span className="ml-1 text-[#e65e60]">*</span>}</span>
      <input className="form-input" type={type} name={name} value={value} onChange={onChange} required={required} placeholder={placeholder} inputMode={inputMode} autoComplete={autoComplete} maxLength={maxLength} />
    </label>
  );
}

function PrivacyDialog({ onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);
  return (
    <div role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }} className="fixed inset-0 z-[70] flex items-center justify-center bg-[#102d44]/60 px-4 py-5 backdrop-blur-sm">
      <section role="dialog" aria-modal="true" aria-labelledby="privacy-title" className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[24px] bg-white p-6 shadow-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div><p className="mb-1 text-xs font-medium uppercase tracking-wider text-[#0c8ed4]">PRIVACY NOTICE</p><h2 id="privacy-title" className="text-xl font-semibold text-[#15334d]">ประกาศการใช้ข้อมูลส่วนบุคคล</h2></div>
          <button type="button" aria-label="ปิดหน้าต่าง" onClick={onClose} className="rounded-xl p-2 text-[#6b879a] hover:bg-[#eef7fe]"><X size={21}/></button>
        </div>
        <div className="mt-6 space-y-4 text-sm leading-[1.95] text-[#617688]">
          <p><strong className="text-[#18394f]">ผู้ดูแลข้อมูล:</strong> {SITE_CONFIG.operatorName}</p>
          <p><strong className="text-[#18394f]">ข้อมูลที่เก็บ:</strong> ชื่อและเบอร์ติดต่อของผู้แนะนำ/ลูกค้า พื้นที่ติดตั้ง ความสนใจในผู้ให้บริการ และรายละเอียดที่ผู้ส่งกรอกเพิ่มเติม</p>
          <p><strong className="text-[#18394f]">วัตถุประสงค์:</strong> เพื่อรับเรื่อง ตรวจสอบพื้นที่และคุณสมบัติของเคส ประสานงานติดต่อและติดตั้งอินเทอร์เน็ต และตรวจสอบสิทธิ์ค่าตอบแทน</p>
          <p><strong className="text-[#18394f]">การเปิดเผย:</strong> ข้อมูลอาจถูกส่งต่อให้เจ้าหน้าที่หรือผู้ให้บริการที่เกี่ยวข้องเท่าที่จำเป็นต่อการประสานงานติดตั้ง โดยแบบฟอร์มออนไลน์นี้ใช้ Netlify Forms ในการรับข้อมูล</p>
          <p><strong className="text-[#18394f]">สิทธิ์ของเจ้าของข้อมูล:</strong> ลูกค้าสามารถติดต่อผู้ดูแลเพื่อขอเข้าถึง แก้ไข หรือลบข้อมูลภายใต้ข้อจำกัดตามกฎหมาย</p>
          {SITE_CONFIG.privacyEmail ? <p><strong className="text-[#18394f]">ติดต่อ:</strong> <a className="text-[#0d84cc] underline" href={`mailto:${SITE_CONFIG.privacyEmail}`}>{SITE_CONFIG.privacyEmail}</a></p> : <p className="rounded-xl bg-amber-50 px-4 py-3 text-amber-800"><strong>สำหรับผู้ดูแลเว็บไซต์:</strong> กรุณาใส่ชื่อผู้รับผิดชอบ อีเมลติดต่อ และกำหนดระยะเวลาเก็บข้อมูลใน src/config.js และนโยบายฉบับสมบูรณ์ก่อนเปิดใช้จริง</p>}
          <p className="text-xs text-[#8a9aa8]">ข้อความนี้เป็นประกาศเบื้องต้น ไม่ใช่คำรับรองว่าการดำเนินงานเป็นไปตามกฎหมายคุ้มครองข้อมูลส่วนบุคคลทุกประการ</p>
        </div>
        <button type="button" onClick={onClose} className="btn-primary mt-6 w-full justify-center">เข้าใจแล้ว <Check size={17}/></button>
      </section>
    </div>
  );
}

function LeadForm() {
  const [lead, setLead] = useState(blankLead);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [showPrivacy, setShowPrivacy] = useState(false);
  const update = (e) => {
    const { name, value } = e.target;
    const nextValue = name === 'agentPhone' || name === 'customerPhone' ? value.replace(/\D/g, '').slice(0, 10) : value;
    setLead((current) => ({ ...current, [name]: nextValue }));
  };
  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (!consent) { setError('โปรดยืนยันว่าลูกค้าอนุญาตให้ส่งข้อมูลแล้ว'); return; }
    if (!/^0\d{8,9}$/.test(lead.agentPhone) || !/^0\d{8,9}$/.test(lead.customerPhone)) {
      setError('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (ขึ้นต้นด้วย 0 และมี 9–10 หลัก)'); return;
    }
    if (import.meta.env.DEV) {
      setStatus('demo');
      return;
    }
    setStatus('sending');
    try {
      const payload = new URLSearchParams({ 'form-name': 'fiber-lead', 'bot-field': '', ...lead, consent: 'yes' });
      const response = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: payload.toString() });
      if (!response.ok) throw new Error('Form submission failed');
      setStatus('success');
      setLead(blankLead);
      setConsent(false);
    } catch {
      setStatus('idle');
      setError('ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง หากยังมีปัญหาโปรดติดต่อผู้ดูแลเว็บไซต์');
    }
  };

  return (
    <section id="refer" className="section-space relative overflow-hidden bg-gradient-to-b from-[#f6fbff] to-[#eef8ff]">
      <div className="pointer-events-none absolute -bottom-32 -left-28 h-96 w-96 rounded-full bg-[#d5eeff] blur-[90px]" />
      <div className="container-site relative grid items-start gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
        <div className="pt-3 lg:sticky lg:top-28">
          <span className="section-badge">SEND A REFERRAL</span>
          <h2 className="mt-5 text-[clamp(2rem,4vw,2.75rem)] font-bold leading-[1.35] tracking-[-.03em] text-[#15334f]">มีลูกค้าสนใจติดเน็ต?<br/><span className="gradient-word">ส่งข้อมูลได้เลย</span></h2>
          <p className="mt-5 max-w-[440px] text-[15px] leading-[2] text-[#6d8295]">กรอกข้อมูลผู้แนะนำและลูกค้าที่ต้องการติดตั้งอินเทอร์เน็ตบ้าน เพื่อให้ผู้ดูแลตรวจสอบและประสานงานต่อ</p>
          <div className="mt-9 space-y-5">
            {[['1','แจ้งข้อมูลผู้แนะนำ','เพื่อระบุเจ้าของเคสที่ส่งเข้ามา'],['2','แจ้งข้อมูลลูกค้า','โปรดได้รับความยินยอมก่อนส่งข้อมูล'],['3','รอการตรวจสอบ','ค่าตอบแทนเกิดขึ้นเมื่อติดตั้งสำเร็จ']].map(([number,title,desc]) => (
              <div key={number} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] border border-[#d7ebfa] bg-white font-numbers text-sm font-bold text-[#1586cf]">{number}</span>
                <span className="pt-0.5"><strong className="block text-[15px] font-semibold text-[#1b3b53]">{title}</strong><span className="mt-1 block text-[13px] text-[#8699a8]">{desc}</span></span>
              </div>
            ))}
          </div>
          <div className="mt-9 flex max-w-[440px] items-start gap-3 rounded-2xl border border-[#d4eaf9] bg-white/70 p-4 text-[12px] leading-[1.85] text-[#638499]">
            <ShieldCheck size={21} className="mt-0.5 shrink-0 text-[#1691ce]"/>
            <span>โปรดส่งข้อมูลเฉพาะผู้ที่อนุญาตให้ติดต่อกลับเพื่อเสนอหรือประสานงานติดตั้งอินเทอร์เน็ตเท่านั้น</span>
          </div>
        </div>
        <div className="rounded-[28px] border border-[#e0eef9] bg-white p-6 shadow-[0_20px_65px_rgba(27,99,152,.075)] sm:p-9">
          {status === 'success' ? (
            <div role="status" className="flex min-h-[480px] flex-col items-center justify-center px-3 text-center">
              <span className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#e4faf0] text-[#10ad7a]"><CheckCircle2 size={43} strokeWidth={1.75}/></span>
              <h3 className="text-[27px] font-semibold text-[#173b51]">ส่งข้อมูลเรียบร้อยแล้ว!</h3>
              <p className="mt-3 max-w-[370px] text-sm leading-8 text-[#77909e]">ข้อมูลถูกส่งให้ระบบแล้ว โปรดรอการตรวจสอบและประสานงานจากผู้ดูแล ขอบคุณที่ร่วมแนะนำลูกค้า</p>
              <button type="button" onClick={() => setStatus('idle')} className="btn-primary mt-8">ส่งข้อมูลลูกค้ารายถัดไป <ArrowRight size={18}/></button>
            </div>
          ) : (
            <form name="fiber-lead" method="POST" onSubmit={submit}>
              <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                <div><p className="text-[12px] font-medium tracking-[.13em] text-[#0c9ad5]">REFERRAL FORM</p><h3 className="mt-1 text-[23px] font-semibold text-[#18364d]">แบบฟอร์มส่งข้อมูลลูกค้า</h3></div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf9f3] px-3 py-1.5 text-[11px] font-medium text-[#109f7c]"><ShieldCheck size={14}/> ส่งข้อมูลอย่างระมัดระวัง</span>
              </div>
              <div className="form-section-heading"><span className="form-section-number">01</span><span>ข้อมูลผู้แนะนำ</span></div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Field label="ชื่อผู้แนะนำ" name="agentName" required value={lead.agentName} onChange={update} placeholder="ชื่อ - นามสกุล" autoComplete="name" maxLength={100}/>
                <Field label="เบอร์โทรผู้แนะนำ" name="agentPhone" required value={lead.agentPhone} onChange={update} placeholder="08xxxxxxxx" type="tel" inputMode="numeric" autoComplete="tel" maxLength={10}/>
              </div>
              <div className="form-section-heading mt-9"><span className="form-section-number">02</span><span>ข้อมูลลูกค้าที่สนใจติดตั้ง</span></div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Field label="ชื่อลูกค้า" name="customerName" required value={lead.customerName} onChange={update} placeholder="ชื่อ - นามสกุล" maxLength={100}/>
                <Field label="เบอร์โทรลูกค้า" name="customerPhone" required value={lead.customerPhone} onChange={update} placeholder="08xxxxxxxx" type="tel" inputMode="numeric" maxLength={10}/>
                <Field label="จังหวัดที่ติดตั้ง" name="province" required value={lead.province} onChange={update} placeholder="เช่น นนทบุรี" maxLength={80}/>
                <Field label="อำเภอ / เขต" name="district" required value={lead.district} onChange={update} placeholder="เช่น เมืองนนทบุรี" maxLength={80}/>
                <label className="form-label sm:col-span-2"><span>ที่อยู่หรือจุดติดตั้ง <span className="font-normal text-[#a3afba]">(ไม่บังคับ)</span></span><input className="form-input" name="installAddress" value={lead.installAddress} onChange={update} placeholder="หมู่บ้าน / ตำบล / สถานที่ใกล้เคียง" maxLength={240}/></label>
                <label className="form-label sm:col-span-2"><span>ผู้ให้บริการที่สนใจ</span><span className="relative"><select className="form-input appearance-none pr-10" name="provider" value={lead.provider} onChange={update}><option value="">เลือกผู้ให้บริการ (ถ้ามี)</option><option value="AIS Fibre">AIS Fibre</option><option value="3BB Fibre3">3BB Fibre3</option><option value="ยังไม่ตัดสินใจ">ยังไม่ตัดสินใจ</option><option value="อื่น ๆ">อื่น ๆ</option></select><ChevronDown aria-hidden="true" size={17} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#8598aa]" /></span></label>
                <label className="form-label sm:col-span-2"><span>หมายเหตุเพิ่มเติม <span className="font-normal text-[#a3afba]">(ไม่บังคับ)</span></span><textarea className="form-input min-h-[95px] resize-y" name="notes" value={lead.notes} onChange={update} placeholder="เช่น ช่วงเวลาที่สะดวกรับสาย หรือรายละเอียดพื้นที่" maxLength={500}/></label>
              </div>
              <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl bg-[#f4faff] p-4 text-[12px] leading-[1.85] text-[#5f788d]">
                <input className="mt-1 h-4 w-4 shrink-0 accent-[#0a8ad8]" name="consent" type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
                <span>ฉันยืนยันว่าได้รับความยินยอมจากลูกค้าให้เปิดเผยชื่อ เบอร์ติดต่อ และรายละเอียดที่เกี่ยวข้อง เพื่อใช้ตรวจสอบและประสานงานติดตั้งอินเทอร์เน็ต และรับทราบ <button type="button" onClick={(e) => { e.preventDefault(); setShowPrivacy(true); }} className="font-semibold text-[#0b84cc] underline underline-offset-4 hover:text-[#075b9c]">การใช้ข้อมูลส่วนบุคคล</button></span>
              </label>
              {error && <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-xs leading-relaxed text-red-700">{error}</p>}
              {status === 'demo' && <p role="status" className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800">อยู่ในโหมดทดลองบนเครื่อง: ยังไม่มีการส่งข้อมูลจริง ฟอร์มจะส่งเข้าระบบ Netlify Forms เมื่อ Deploy เว็บไซต์บน Netlify</p>}
              <button type="submit" disabled={status === 'sending'} className="btn-primary mt-6 !w-full justify-center !py-4 disabled:cursor-not-allowed disabled:opacity-60">
                {status === 'sending' ? 'กำลังส่งข้อมูล...' : 'ส่งข้อมูลลูกค้า'} <Send size={18}/>
              </button>
              <p className="mt-4 text-center text-[11px] leading-[1.7] text-[#97a9b5]">ข้อมูลจะถูกใช้เพื่อประสานงานตามวัตถุประสงค์ที่แจ้งไว้เท่านั้น</p>
            </form>
          )}
        </div>
      </div>
      {showPrivacy && <PrivacyDialog onClose={() => setShowPrivacy(false)} />}
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);
  return (
    <section id="faq" className="section-space bg-white">
      <div className="container-site max-w-[900px]">
        <SectionTitle badge="FREQUENTLY ASKED QUESTIONS" title="คำถามที่พบบ่อย" desc="ตอบข้อสงสัยก่อนเริ่มแนะนำลูกค้า" />
        <div className="space-y-3">
          {faqItems.map(({ q, a }, idx) => (
            <div key={q} className={`overflow-hidden rounded-2xl border transition-colors ${active === idx ? 'border-[#bfe5fa] bg-[#f8fcff]' : 'border-[#e6eff5] bg-white'}`}>
              <button aria-expanded={active === idx} type="button" onClick={() => setActive(active === idx ? -1 : idx)} className="flex w-full items-center justify-between gap-4 px-5 py-[21px] text-left sm:px-6">
                <span className="text-[14px] font-medium leading-7 text-[#1d3b52] sm:text-[15px]">{q}</span>
                <ChevronDown size={18} className={`shrink-0 text-[#138bcf] transition-transform ${active === idx ? 'rotate-180' : ''}`} />
              </button>
              {active === idx && <p className="px-5 pb-6 text-[13px] leading-[2] text-[#71889a] sm:px-6">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  return (
    <>
      <footer className="bg-[#12334e] text-white">
        <div className="container-site grid gap-8 py-12 md:grid-cols-[1.35fr_.65fr_.7fr] md:py-14">
          <div><Logo light/><p className="mt-5 max-w-[380px] text-[13px] leading-[1.9] text-[#a8c2d4]">พื้นที่สำหรับส่งต่อโอกาส แนะนำผู้สนใจติดตั้งอินเทอร์เน็ตบ้าน รับค่าตอบแทนตามเคสที่ติดตั้งสำเร็จและผ่านการตรวจสอบ</p></div>
          <div><h4 className="mb-5 text-sm font-medium">เมนูเว็บไซต์</h4><div className="space-y-3 text-[12px] text-[#b3c9d9]"><a className="block hover:text-white" href="#how">ขั้นตอนการทำงาน</a><a className="block hover:text-white" href="#benefits">ทำไมต้องแนะนำผ่านเรา</a><a className="block hover:text-white" href="#refer">ส่งข้อมูลลูกค้า</a><a className="block hover:text-white" href="#faq">คำถามที่พบบ่อย</a></div></div>
          <div><h4 className="mb-5 text-sm font-medium">ข้อมูลสำคัญ</h4><div className="space-y-3 text-[12px] text-[#b3c9d9]"><button className="block text-left hover:text-white" onClick={() => setShowPrivacy(true)}>การใช้ข้อมูลส่วนบุคคล</button><p>ค่าตอบแทน: ฿{SITE_CONFIG.rewardPerInstallation} / ติดตั้งสำเร็จ</p>{SITE_CONFIG.privacyEmail && <a className="block break-all hover:text-white" href={`mailto:${SITE_CONFIG.privacyEmail}`}>{SITE_CONFIG.privacyEmail}</a>}{SITE_CONFIG.lineUrl && <a target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white" href={SITE_CONFIG.lineUrl}><MessageCircle size={16}/> ติดต่อทาง LINE</a>}</div></div>
        </div>
        <div className="border-t border-white/10"><div className="container-site flex flex-col justify-between gap-3 py-5 text-[11px] text-[#88a5b9] sm:flex-row"><span>© {new Date().getFullYear()} Fiber Partner. All rights reserved.</span><span>เว็บไซต์เพื่อรับข้อมูลแนะนำลูกค้า ไม่ใช่เว็บไซต์ทางการของผู้ให้บริการอินเทอร์เน็ตที่ระบุชื่อ</span></div></div>
      </footer>
      {showPrivacy && <PrivacyDialog onClose={() => setShowPrivacy(false)}/>}
    </>
  );
}

export default function App() {
  return <><Nav/><main><Hero/><How/><Benefits/><Calculator/><LeadForm/><FAQ/></main><Footer/></>;
}
