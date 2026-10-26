import { useState } from 'react';
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Check, CheckCircle2, ChevronDown,
  CircleDollarSign, ClipboardCheck, Gift, Headphones, House, Menu,
  MessageCircle, MonitorPlay, Router, ShieldCheck, Sparkles, Video,
  Wifi, X, Zap,
} from 'lucide-react';
import { SITE_CONFIG } from './config';

const { lineUrl: LINE, rewardPerInstallation: REWARD, plans } = SITE_CONFIG;
const price = (number) => Number(number).toLocaleString('th-TH');

function LineButton({ children, className = '', icon = true, ...props }) {
  return (
    <a className={`btn-line ${className}`} href={LINE} target="_blank" rel="noopener noreferrer" {...props}>
      {icon && <MessageCircle aria-hidden="true" size={20} strokeWidth={2.3} />}
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={17} />
    </a>
  );
}

function Logo({ inverse = false }) {
  return (
    <a href="#top" className={`brand ${inverse ? 'brand-inverse' : ''}`} aria-label="Fiber Partner กลับหน้าแรก">
      <span className="brand-symbol" aria-hidden="true"><Wifi size={23} strokeWidth={3} /></span>
      <span className="brand-type"><strong>FIBER<span>PARTNER</span></strong><small>HOME INTERNET REFERRAL</small></span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [['#packages', 'แพ็กเกจเน็ตบ้าน'], ['#how', 'วิธีรับ 100 บาท'], ['#faq', 'คำถามที่พบบ่อย']];
  return (
    <>
      <div className="notice-bar">
        <div className="site-container notice-inner"><span className="notice-dot" />
          <span>แนะนำลูกค้าติดตั้งเน็ตบ้าน <b>ติดตั้งสำเร็จ รับ {REWARD} บาท/เคส</b></span>
          <a href={LINE} target="_blank" rel="noopener noreferrer">ติดต่อผ่าน LINE <ArrowUpRight size={13} /></a>
        </div>
      </div>
      <header className="site-header">
        <div className="site-container header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="เมนูหลัก">
            {navItems.map(([href, title]) => <a href={href} key={href}>{title}</a>)}
          </nav>
          <div className="header-actions"><LineButton className="btn-nav">เพิ่มเพื่อน LINE</LineButton>
            <button type="button" className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-label={menuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button>
          </div>
        </div>
        {menuOpen && <nav className="mobile-nav mobile-nav-open" aria-label="เมนูมือถือ">
          {navItems.map(([href, title]) => <a onClick={() => setMenuOpen(false)} href={href} key={href}>{title}<ArrowRight size={16}/></a>)}
          <a onClick={() => setMenuOpen(false)} className="mobile-line" href={LINE} target="_blank" rel="noopener noreferrer"><MessageCircle size={19}/> คุยผ่าน LINE <ArrowUpRight size={16}/></a>
        </nav>}
      </header>
    </>
  );
}

function ConnectionArt() {
  return (
    <div className="hero-visual" aria-label="ภาพประกอบเราเตอร์อินเทอร์เน็ตบ้านและการเชื่อมต่อไฟเบอร์">
      <div className="signal-ring signal-ring-one"/><div className="signal-ring signal-ring-two"/><div className="hero-visual-glow"/>
      <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/>
      <div className="router-scene">
        <div className="router-wave wave-one"/><div className="router-wave wave-two"/><div className="router-wave wave-three"/>
        <div className="router-antenna antenna-left"/><div className="router-antenna antenna-right"/>
        <div className="router-top" />
        <div className="router-front"><span className="router-led"/><span className="router-led"/><span className="router-led"/><span className="router-led"/><span className="router-brand">FIBER<span>+</span></span></div>
        <div className="router-shadow" />
      </div>
      <div className="visual-float visual-speed"><span className="float-icon"><Zap size={21} fill="currentColor"/></span><span><small>FAST CONNECTION</small><b>FIBER OPTIC</b></span></div>
      <div className="visual-float visual-bonus"><span className="float-check"><Check size={18} strokeWidth={3}/></span><span><b>พร้อมเชื่อมต่อ</b><small>บ้านคุณกับทุกความสุข</small></span></div>
      <div className="visual-caption"><span className="caption-dash" /> INTERNET FOR EVERY HOME</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-noise" aria-hidden="true"/>
      <div className="site-container hero-layout">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-spark"><Sparkles size={15}/></span> FIBER PARTNER NETWORK <span className="eyebrow-arrow">↗</span></span>
          <h1>แนะนำเน็ตบ้าน<br/><em>ให้คนรู้จัก</em><br/><span className="gradient-text">รับเลย 100 บาท</span></h1>
          <p className="hero-lead">มีคนกำลังมองหาอินเทอร์เน็ตบ้าน? แนะนำผ่าน LINE ได้ทันที ไม่ต้องกรอกฟอร์ม ไม่ต้องติดตั้งเอง <strong>ติดตั้งสำเร็จ รับค่าตอบแทน 100 บาทต่อเคส</strong></p>
          <div className="hero-ctas"><LineButton>คุยกับนายหน้าผ่าน LINE</LineButton><a href="#packages" className="btn-secondary">ดูแพ็กเกจเน็ตบ้าน <ArrowRight size={19}/></a></div>
          <div className="hero-points"><span><CheckCircle2 size={17}/> ติดต่อผ่าน LINE โดยตรง</span><span><CheckCircle2 size={17}/> จ่ายเมื่อเคสติดตั้งจริง</span></div>
          <p className="hero-caveat">* ค่าตอบแทนสำหรับเคสที่ติดตั้งสำเร็จและผ่านการตรวจสอบตามเงื่อนไข</p>
        </div>
        <ConnectionArt />
      </div>
      <div className="site-container hero-bottom"><div className="hero-bottom-inner">
        <div className="provider-text"><span className="provider-mini-dot"/> แพ็กเกจอินเทอร์เน็ตบ้าน <strong><span className="provider-ais">AIS</span> <span className="provider-dot">×</span> <span className="provider-3bb">3BB FIBRE</span></strong></div>
        <div className="hero-bottom-divider" />
        <div className="hero-bottom-fact"><BadgeCheck size={20}/><span>เลือกแพ็กเกจที่เหมาะกับบ้านคุณ</span></div>
        <div className="hero-bottom-fact"><Headphones size={20}/><span>สอบถามรายละเอียดทาง LINE</span></div>
      </div></div>
    </section>
  );
}

function Heading({ label, title, desc }) {
  return <div className="section-heading"><span className="section-eyebrow"><span/> {label}</span><h2>{title}</h2><p>{desc}</p></div>;
}

function PlanCard({ plan }) {
  const highlighted = plan.highlighted;
  return (
    <article className={`plan-card ${highlighted ? 'plan-featured' : ''}`}>
      {highlighted && <div className="plan-feature-label"><Sparkles size={14}/> แพ็กเกจแนะนำ</div>}
      <div className="plan-main">
        <div className="plan-card-top"><span className="plan-tag">{highlighted ? 'POPULAR CHOICE' : 'STARTER PLAN'}</span><span className="plan-icon">{highlighted ? <Zap size={22} /> : <Wifi size={22}/>}</span></div>
        <h3>{plan.name}</h3><div className="plan-speed"><strong>{plan.speed}<span> / {plan.speed}</span></strong><span className="speed-unit">Mbps</span></div>
        <p className="plan-speed-caption"><CheckCircle2 size={17}/> ดาวน์โหลด / อัปโหลด <b>ไม่ลดความเร็ว</b></p>
        <div className="plan-price"><div><span className="currency">฿</span><strong>{price(plan.price)}</strong></div><span className="plan-month">/ เดือน*</span></div>
        <div className="plan-divider"/>
        <div className="plan-features"><p><Check size={19}/> อินเทอร์เน็ตไฟเบอร์สำหรับบ้าน</p><p><Check size={19}/> ความเร็วเท่ากันทั้งรับและส่ง</p><p><Check size={19}/> สอบถามพื้นที่ติดตั้งได้ทาง LINE</p></div>
        {highlighted ? <div className="gift-panel"><div className="gift-panel-title"><Gift size={19}/> รับสิทธิ์เลือกของแถม 1 อย่าง*</div><div className="gift-list"><span><Video size={18}/> กล้องวงจรปิด</span><em>หรือ</em><span><MonitorPlay size={18}/> AIS PLAYBOX</span></div></div>
        : <div className="plan-smallnote"><ShieldCheck size={18}/> เหมาะกับใช้งานทั่วไป เรียน และทำงานที่บ้าน</div>}
      </div>
      <div className="plan-bottom"><LineButton className={highlighted ? 'plan-button-strong' : ''}>สอบถามแพ็กเกจ {price(plan.price)} บาท</LineButton></div>
    </article>
  );
}

function Packages() {
  return <section className="packages-section section-pad" id="packages"><div className="site-container">
    <Heading label="INTERNET PACKAGES" title={<>แพ็กเกจเน็ตบ้าน <span className="title-green">เลือกได้ตามไลฟ์สไตล์</span></>} desc="สองตัวเลือกความเร็วคุ้มค่า พร้อมสอบถามความพร้อมพื้นที่ติดตั้งและรายละเอียดได้ทาง LINE"/>
    <div className="plan-grid">{plans.map((p) => <PlanCard key={p.id} plan={p}/>)}</div>
    <div className="plan-disclaimer"><ShieldCheck size={18}/><span>* ราคาต่อเดือนและของแถมเป็นข้อมูลโปรโมชั่นที่ผู้ดูแลเว็บไซต์ระบุ อาจมีเงื่อนไข ค่าบริการเพิ่มเติม ภาษี ระยะสัญญา และข้อจำกัดตามพื้นที่ โปรดยืนยันรายละเอียดและสิทธิ์รับของแถมผ่าน LINE ก่อนสมัคร</span></div>
  </div></section>;
}

function Referral() {
  const steps = [
    { number: '01', icon: House, title: 'เจอคนที่อยากติดเน็ต', text: 'แนะนำแพ็กเกจให้เพื่อน คนรู้จัก หรือผู้ที่สนใจติดตั้งอินเทอร์เน็ตบ้าน' },
    { number: '02', icon: MessageCircle, title: 'คุยและส่งข้อมูลทาง LINE', text: 'ให้ลูกค้ายินยอมก่อนแชร์ชื่อ เบอร์โทร และที่อยู่ติดตั้งผ่าน LINE กับผู้ประสานงาน' },
    { number: '03', icon: CircleDollarSign, title: 'ติดตั้งจริง รับ 100 บาท', text: 'เมื่อทีมงานยืนยันว่าเคสติดตั้งสำเร็จ และผ่านการตรวจสอบ รับค่าตอบแทนตามเงื่อนไข' },
  ];
  return <section className="referral-section section-pad" id="how"><div className="site-container">
    <div className="referral-intro"><div><span className="section-eyebrow"><span/> HOW IT WORKS</span><h2>แค่บอกต่อ ก็มีโอกาส<br/><span>สร้างรายได้ 100 บาท/เคส</span></h2><p>ทุกขั้นตอนคุยกับผู้ประสานงานผ่าน LINE ไม่ต้องสมัครสมาชิก ไม่ต้องกรอกฟอร์มบนเว็บไซต์</p></div>
      <div className="referral-amount"><span>ค่าตอบแทนต่อการติดตั้งสำเร็จ</span><strong>100<small>บาท</small></strong><span className="amount-caption"><CheckCircle2 size={15}/> เฉพาะเคสที่ผ่านการตรวจสอบ</span></div>
    </div>
    <div className="steps-grid">{steps.map(({ number, icon: Icon, title, text }, i) => <div key={number} className="step-card"><span className="step-number">{number}</span><span className="step-icon"><Icon size={25}/></span><h3>{title}</h3><p>{text}</p>{i !== 2 && <span className="step-arrow"><ArrowRight size={18}/></span>}</div>)}</div>
    <div className="steps-action"><LineButton>ส่งข้อมูลลูกค้าผ่าน LINE</LineButton><span><ShieldCheck size={16}/> โปรดขอความยินยอมจากลูกค้าก่อนส่งข้อมูลส่วนบุคคล</span></div>
  </div></section>;
}

function ContactBand() {
  return <section className="site-container"><div className="contact-band"><span className="contact-deco contact-deco-1"/><span className="contact-deco contact-deco-2"/><div className="contact-text"><span className="contact-kicker"><span className="online-dot"/> ติดต่อได้ผ่าน LINE</span><h2>มีลูกค้าสนใจติดเน็ตบ้าน?<br/>ทักมาคุยกันได้เลย</h2><p>สอบถามแพ็กเกจ ตรวจสอบพื้นที่ หรือแจ้งลูกค้าที่พร้อมติดตั้ง ติดต่อผู้ประสานงานได้โดยตรง</p></div><LineButton className="contact-cta">เพิ่มเพื่อน LINE ตอนนี้</LineButton></div></section>;
}

const faqs = [
  ['แนะนำลูกค้าหนึ่งคน ได้รับ 100 บาททันทีหรือไม่?', 'ยังไม่ได้รับทันทีครับ ค่าตอบแทน 100 บาทจ่ายเฉพาะเคสที่ติดตั้งอินเทอร์เน็ตสำเร็จและผ่านการตรวจสอบ โดยสอบถามรอบการจ่ายเงินกับผู้ประสานงานทาง LINE ก่อนเริ่มแนะนำลูกค้า'],
  ['ต้องกรอกฟอร์มหรือสมัครสมาชิกบนเว็บไซต์ไหม?', 'ไม่ต้อง เว็บไซต์นี้ไม่มีฟอร์มรับข้อมูล ให้กดปุ่ม LINE เพื่อพูดคุยกับผู้ประสานงานและแจ้งข้อมูลลูกค้าที่ได้รับความยินยอมแล้ว'],
  ['แพ็กเกจ 599 บาท ได้ทั้งกล้องวงจรปิดและ AIS PLAYBOX ไหม?', 'ข้อเสนอที่แจ้งคือเลือกของแถมหนึ่งอย่างระหว่างกล้องวงจรปิดหรือ AIS PLAYBOX ทั้งนี้ขึ้นอยู่กับสิทธิ์และเงื่อนไขโปรโมชั่น โปรดยืนยันรายละเอียดทาง LINE ก่อนสมัคร'],
  ['ติดตั้งได้ทุกจังหวัดหรือไม่?', 'ต้องตรวจสอบความพร้อมของโครงข่ายและพื้นที่ติดตั้งกับผู้ประสานงานก่อน จึงยังไม่สามารถรับประกันว่าทุกที่อยู่จะติดตั้งได้'],
];

function FAQ() {
  return <section className="faq-section section-pad" id="faq"><div className="site-container faq-layout"><div className="faq-intro"><span className="section-eyebrow"><span/> QUESTIONS & ANSWERS</span><h2>มีคำถาม?<br/><span>เรามีคำตอบ</span></h2><p>ถ้ายังไม่แน่ใจเรื่องแพ็กเกจ การติดตั้ง หรือค่าตอบแทน สามารถสอบถามโดยตรงผ่าน LINE</p><a className="faq-line-link" href={LINE} target="_blank" rel="noopener noreferrer">คุยกับผู้ประสานงาน <ArrowUpRight size={17}/></a></div>
    <div className="faq-list">{faqs.map(([q, a], i) => <details className="faq-item" key={q} open={i===0}><summary><span>{q}</span><ChevronDown size={19}/></summary><p>{a}</p></details>)}</div>
  </div></section>;
}

function Footer() {
  return <footer className="footer"><div className="site-container footer-top"><div><Logo inverse/><p>ช่องทางประสานงานแนะนำลูกค้าติดตั้งอินเทอร์เน็ตบ้าน<br/>เชื่อมต่อโอกาสดี ๆ ผ่านการบอกต่อ</p></div><div className="footer-right"><strong>เมนูเว็บไซต์</strong><a href="#packages">แพ็กเกจเน็ตบ้าน</a><a href="#how">วิธีรับค่าตอบแทน</a><a href="#faq">คำถามที่พบบ่อย</a><a href={LINE} target="_blank" rel="noopener noreferrer">ติดต่อทาง LINE ↗</a></div></div>
    <div className="site-container footer-disclaimer">เว็บไซต์นี้เป็นช่องทางประชาสัมพันธ์และประสานงานแนะนำลูกค้า ไม่ใช่เว็บไซต์บริการลูกค้าอย่างเป็นทางการของ AIS หรือ 3BB รายละเอียดราคา ความเร็ว สิทธิประโยชน์ และเงื่อนไขให้ตรวจสอบกับผู้ประสานงานก่อนสมัคร ทั้งนี้ เว็บไซต์ไม่ได้รับข้อมูลลูกค้าผ่านแบบฟอร์ม</div>
    <div className="site-container footer-bottom"><span>© {new Date().getFullYear()} Fiber Partner. All rights reserved.</span><span>Made for connections <span className="footer-heart">♥</span></span></div>
  </footer>;
}

export default function App() {
  return <><Header/><main><Hero/><Packages/><Referral/><ContactBand/><FAQ/></main><Footer/><a className="floating-line" href={LINE} target="_blank" rel="noopener noreferrer" aria-label="ติดต่อ Fiber Partner ผ่าน LINE"><MessageCircle size={24}/><span>LINE</span></a></>;
}
