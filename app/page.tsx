'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Star, PlayCircle,
  Tv, Monitor, Smartphone,
  Box, Lock, Mail, Users, ShieldCheck,
  CheckCircle2, Phone, Zap, MessageCircle, ChevronDown, ShoppingCart
} from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedButton from '@/components/AnimatedButton';
import ServerMap from '@/components/ServerMap';
import BlogSection from '@/components/BlogSection';

// Dynamic image sources for media sliders
const moviesData = Array.from({ length: 15 }, (_, i) => 
  `/img/slider/movie_${String(i + 1).padStart(2, '0')}.jpg`
);

const seriesData = Array.from({ length: 15 }, (_, i) => 
  `/img/slider/serie_${String(i + 1).padStart(2, '0')}.webp`
);

const sportsData = Array.from({ length: 10 }, (_, i) => 
  `/img/slider/sport_${String(i + 1).padStart(2, '0')}.jpg`
);

// Pricing structure based on duration and device counts
const pricingPlans = [
  {
    id: '3-months',
    name: '3 MONTHS',
    months: 3,
    prices: {
      1: 30,    // 1 device: €30
      2: 40,    // 2 devices: €40
      3: 55,    // 3 devices: €55
    },
    features: [
      '20,000+ Live TV Channels Worldwide',
      '65,000+ Movies & Series in 4K/8K',
      'All Premium Sports Channels & Live PPV Events',
      'Netflix, HBO Max, Disney+ & Prime Video Content',
      'Ultra HD & Anti-Freeze Streaming Technology',
      'Works on Firestick, Smart TV, Android & iOS',
      '7-Day Catch-Up TV & Interactive EPG Guide',
      '99.9% High-Speed Guaranteed Server Uptime',
      'Instant Automated IPTV Activation Within Minutes',
      'Priority 24/7 Dedicated Technical IPTV Support'
    ],
    recommended: false
  },
  {
    id: '6-months',
    name: '6 MONTHS',
    months: 6,
    prices: {
      1: 50,    // 1 device: €50
      2: 70,    // 2 devices: €70
      3: 99,    // 3 devices: €99
    },
    features: [
      '20,000+ Live TV Channels Worldwide',
      '65,000+ Movies & Series in 4K/8K',
      'All Premium Sports Channels & Live PPV Events',
      'Netflix, HBO Max, Disney+ & Prime Video Content',
      'Ultra HD & Anti-Freeze Streaming Technology',
      'Works on Firestick, Smart TV, Android & iOS',
      '7-Day Catch-Up TV & Interactive EPG Guide',
      '99.9% High-Speed Guaranteed Server Uptime',
      'Instant Automated IPTV Activation Within Minutes',
      'Priority 24/7 Dedicated Technical IPTV Support'
    ],
    recommended: false
  },
  {
    id: '12-months',
    name: '12 MONTHS',
    months: 12,
    prices: {
      1: 72,    // 1 device: €72
      2: 99,    // 2 devices: €99
      3: 139,   // 3 devices: €139
    },
    features: [
      '20,000+ Live TV Channels Worldwide',
      '65,000+ Movies & Series in 4K/8K',
      'All Premium Sports Channels & Live PPV Events',
      'Netflix, HBO Max, Disney+ & Prime Video Content',
      'Ultra HD & Anti-Freeze Streaming Technology',
      'Works on Firestick, Smart TV, Android & iOS',
      '7-Day Catch-Up TV & Interactive EPG Guide',
      '99.9% High-Speed Guaranteed Server Uptime',
      'Instant Automated IPTV Activation Within Minutes',
      'Priority 24/7 Dedicated Technical IPTV Support'
    ],
    recommended: true
  }
];

const faqs = [
  {
    q: "WHAT IS SyntraTV AND HOW DOES IT WORK?",
    a: "SyntraTV is an industry-leading premium IPTV streaming network designed to deliver over 20,000 live broadcast TV channels and more than 65,000 video-on-demand (VOD) titles directly to your screens. Utilizing high-speed servers and advanced load-balancing architecture, SyntraTV provides non-stop access to live sports, global news, pay-per-view events, and movie releases without requiring complex hardware or long-term cable contracts."
  },
  {
    q: "IS SyntraTV COMPATIBLE WITH FIRESTICK AND SMART TV?",
    a: "Yes, SyntraTV works seamlessly across virtually all smart devices and operating systems. You can effortlessly stream on Amazon Firestick, Android TV boxes, Samsung and LG Smart TVs, Apple iOS, Android mobile devices, Windows, Mac, and dedicated IPTV receivers like MAG or Formuler. We provide step-by-step setup tutorials and automated setup links for popular applications like IPTV Smarters Pro, TiviMate, XCIPTV, and GSE Smart IPTV."
  },
  {
    q: "DOES SyntraTV INCLUDE SPORTS AND PREMIUM CHANNELS?",
    a: "SyntraTV gives you front-row access to all major international sports networks and live PPV events. You can watch every match from the UEFA Champions League, Premier League, FIFA World Cup, La Liga, Serie A, NFL, NBA, UFC, Formula 1, and Box Office events in native High Definition, Full HD, and pristine 4K resolution. In addition, our library features full catalogs from major streaming platforms like Netflix, HBO Max, Disney+, and Amazon Prime."
  },
  {
    q: "HOW FAST IS SyntraTV ACTIVATION AFTER PAYMENT?",
    a: "Activation is processed immediately following order confirmation. As soon as your transaction is completed, our automated portal sends your M3U playlist link, Xtream Codes API credentials, and easy setup instructions directly to your email inbox within 3 to 5 minutes. Our technical team is available 24/7 via WhatsApp and email if you require assistance during setup."
  },
  {
    q: "CAN I USE SyntraTV ON MULTIPLE DEVICES?",
    a: "Yes! SyntraTV offers flexible multi-room plans to fit every household. You can select single-device access or expand your subscription to support 2 or 3 simultaneous connections under one account. This allows different family members to stream live sports, movies, or news in separate rooms at the same time without stream collisions or buffering."
  },
  {
    q: "WHAT STREAMING QUALITY DOES SyntraTV PROVIDE?",
    a: "We prioritize ultra-low latency and crystal-clear image clarity. Our channel line-up is optimized for 1080p Full HD and 4K UHD playback at high frame rates (60fps), with select VOD titles supporting 8K streaming. Powered by proprietary anti-freeze software and strategically positioned global edge servers, SyntraTV minimizes buffer times even during heavy internet traffic during major global sports broadcasts."
  },
  {
    q: "IS SyntraTV SAFE AND SECURE TO USE?",
    a: "Security and confidentiality are fundamental to our architecture. All customer data and checkout transactions are protected using end-to-end 256-bit SSL encryption. We accept secure digital payment methods, including credit cards, PayPal, and encrypted cryptocurrency payments for enhanced privacy. SyntraTV is also fully compatible with all major VPN services if you choose to encrypt your streaming connection."
  }
];

const SliderRow = ({ reverse = false, items }: { reverse?: boolean, items: string[] }) => (
  <div className={`flex w-max ${reverse ? 'animate-marquee-slow-reverse' : 'animate-marquee-slow'} hover:pause-on-hover`}>
    <div className="flex items-center gap-4 px-2">
      {items.map((src, i) => (
        <div key={`s1-${i}`} className="relative w-32 md:w-48 aspect-[2/3] rounded-2xl overflow-hidden shrink-0 border border-white/5 hover:border-[var(--color-brand)] transition-colors group cursor-pointer shadow-2xl">
          <Image src={src} alt="SyntraTV VOD Stream" fill sizes="(max-width: 768px) 128px, 192px" quality={75} className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
             <PlayCircle size={48} className="text-white drop-shadow-lg" />
          </div>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-4 px-2">
      {items.map((src, i) => (
        <div key={`s2-${i}`} className="relative w-32 md:w-48 aspect-[2/3] rounded-2xl overflow-hidden shrink-0 border border-white/5 hover:border-[var(--color-brand)] transition-colors group cursor-pointer shadow-2xl">
          <Image src={src} alt="SyntraTV VOD Stream" fill sizes="(max-width: 768px) 128px, 192px" quality={75} className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
             <PlayCircle size={48} className="text-white drop-shadow-lg" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Home() {
  const [devicePlan, setDevicePlan] = useState('1'); 
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const getPlanPrice = (plan: typeof pricingPlans[0]) => {
    const deviceCount = parseInt(devicePlan, 10);
    return plan.prices[deviceCount as keyof typeof plan.prices];
  };

  const getSavings = (plan: typeof pricingPlans[0]) => {
    const deviceCount = parseInt(devicePlan, 10);
    const currentPrice = getPlanPrice(plan);
    
    let originalPricePerDevice = 0;
    if (plan.months === 3) {
      originalPricePerDevice = 45; 
    } else if (plan.months === 6) {
      originalPricePerDevice = 72; 
    } else {
      originalPricePerDevice = 92; 
    }
    
    const originalPrice = originalPricePerDevice * deviceCount;
    const savings = originalPrice - currentPrice;
    
    return {
      amount: savings > 0 ? savings : 0,
      percentage: savings > 0 ? Math.round((savings / originalPrice) * 100) : 0,
      originalPrice: originalPrice
    };
  };

  const currentPlans = pricingPlans.map(plan => {
    const price = getPlanPrice(plan);
    const savings = getSavings(plan);
    
    return {
      ...plan,
      price: `€${price}`,
      sub: `€${(price / plan.months).toFixed(2)}/MONTH`,
      savings: savings.amount,
      savingsPercentage: savings.percentage,
      originalPrice: savings.originalPrice
    };
  });

  return (
    <main className="min-h-screen bg-transparent font-sans selection:bg-[var(--color-brand)] selection:text-black overflow-x-hidden pt-15 relative">
      
      {/* Background with Immediate Priority Load to avoid LCP delay */}
      <div className="fixed inset-0 z-[-1]">
        <Image 
          src="/img/bg.jpg" 
          alt="SyntraTV IPTV Background" 
          fill 
          priority 
          quality={75} 
          className="object-cover opacity-20" 
          unoptimized 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/30 via-[#050B14]/40 to-[#050B14]/45"></div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee-slow { animation: marquee 50s linear infinite; }
        .animate-marquee-slow-reverse { animation: marquee-reverse 50s linear infinite; }
        .pause-on-hover:hover { animation-play-state: paused; }
      `}} />

      {/* HERO SECTION */}
      <section className="pt-15 pb-20 px-4 relative flex flex-col items-center text-center overflow-hidden">
        <ScrollReveal className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[var(--color-brand)]/20 rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-white">SyntraTV Official Website</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-display font-black italic uppercase text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter mb-6 max-w-5xl mx-auto drop-shadow-2xl">
            <span className="text-white block">SyntraTV - THE BEST</span>
            <span className="text-[var(--color-brand)] block">PREMIUM IPTV</span>
            <span className="text-[#a3a3a3]">SUBSCRIPTION</span>
          </h1>
        </ScrollReveal>

        {/* Extended Description Paragraph Under H1 */}
        <ScrollReveal delay={0.2} className="relative z-10">
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium max-w-4xl mx-auto mb-10 leading-relaxed text-balance">
            Unlock the ultimate digital entertainment experience with SyntraTV. Stream over 20,000 live global channels and gain instant access to an expansive library of more than 65,000 high-definition movies and TV shows on demand. Powered by cutting-edge anti-freeze technology and low-latency global servers, SyntraTV delivers buffer-free 4K and Ultra HD broadcasts, live PPV sporting events, and premium news channels on Amazon Firestick, Smart TVs, Android devices, iOS, and PCs—backed by instant 24/7 activation and priority setup support.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="flex flex-col sm:flex-row items-center gap-4 mb-20 relative z-10">
          <AnimatedButton text="SUBSCRIBE" href="/pricing" className="w-full sm:w-auto shadow-[0_0_20px_rgba(234,179,8,0.3)]" />
          <a href="/setup" className="h-[3.25rem] px-8 bg-white/5 border border-white/10 text-white rounded-full font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition-colors w-full sm:w-auto">
            SEE HOW IT WORKS
          </a>
        </ScrollReveal>

        {/* Devices Row */}
        <ScrollReveal delay={0.4} className="-mt-[50px] flex items-center justify-center gap-8 md:gap-16 flex-wrap relative z-10">
          {[ 
            { icon: Smartphone, label: 'ANDROID & IOS' }, 
            { icon: Monitor, label: 'DESKTOP & MAC' }, 
            { icon: Tv, label: 'SMART TVS' }, 
            { icon: Box, label: 'FIRE TV & BOXES' } 
          ].map((device, i) => (
             <div key={i} className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 hover:text-[var(--color-brand)] transition-all cursor-pointer">
               <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[var(--color-brand)]">
                 <device.icon size={24} />
               </div>
               <span className="text-[10px] font-bold tracking-widest uppercase">{device.label}</span>
             </div>
          ))}
        </ScrollReveal>
      </section>

      {/* STEPS SECTION */}
      <section className="py-24 relative overflow-hidden bg-square-pattern border-y border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal>
             <h2 className="text-center font-display font-black italic uppercase text-3xl md:text-5xl mb-4 tracking-tight text-white">START WATCHING IN 3 EASY STEPS</h2>
             <p className="text-center text-gray-400 font-medium max-w-2xl mx-auto text-sm md:text-base mb-16">
               Setting up your SyntraTV subscription takes less than 5 minutes. Follow these simple steps to start streaming live channels and on-demand movies immediately.
             </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brand)] to-transparent opacity-30"></div>

            {[
              { num: '01', title: 'SELECT YOUR PLAN', icon: Box, desc: 'Choose the subscription duration and device count that fits your home. Whether you need a single screen for your mobile or a multi-room setup for your family, we have flexible plans designed for every user.', highlight: false },
              { num: '02', title: 'SECURE PAYMENT', icon: Lock, desc: 'Complete your checkout using safe and encrypted payment gateways including Credit Card, PayPal, or Crypto. Enjoy instant checkout with no hidden service fees or automatic contract renewals.', highlight: true },
              { num: '03', title: 'GET CREDENTIALS', icon: Mail, desc: 'Receive your IPTV credentials, M3U playlist URLs, and portal logins in your inbox within minutes. Follow our quick setup guides or let our 24/7 support team configure your devices remotely.', highlight: false },
            ].map((step, idx) => (
              <ScrollReveal delay={0.1 * idx} key={step.num} className="relative z-10">
                <div className={`p-8 rounded-3xl h-full flex flex-col items-center text-center transition-all duration-500 hover:scale-105 border ${step.highlight ? 'bg-gradient-to-b from-[#1a1708] to-[#010307] border-[var(--color-brand)] shadow-[0_0_40px_-10px_var(--color-brand)]' : 'bg-[#050B14]/80 border-white/10 hover:border-white/20 hover:bg-[#0A1128]/80'}`}>
                  
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 relative ${step.highlight ? 'bg-[var(--color-brand)] text-black shadow-lg shadow-[var(--color-brand)]/30' : 'bg-white/5 text-[var(--color-brand)] border border-white/10'}`}>
                     <step.icon size={32} />
                     <div className={`absolute -bottom-4 px-4 py-1 rounded-full text-xs font-black italic border-2 ${step.highlight ? 'bg-black text-[var(--color-brand)] border-[var(--color-brand)]' : 'bg-[#050B14] text-white border-white/10'}`}>
                       {step.num}
                     </div>
                  </div>
                  
                  <h3 className="font-display font-black italic uppercase text-xl mb-3 text-white tracking-widest">{step.title}</h3>
                  <p className="text-gray-400 font-medium text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FULL WIDTH PARTNERS MARQUEE */}
      <section className="py-16 border-y border-white/5 bg-[#03060C]">
        <h4 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#a3a3a3] mb-8">PREMIUM BROADCAST PARTNERS & GLOBAL NETWORKS</h4>
        <div className="w-full overflow-hidden relative select-none">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#03060C] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#03060C] to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-marquee">
            <div className="flex items-center gap-12 px-6">
              {[...Array(12)].map((_, i) => (
                <Image 
                  key={`p1-${i}`} 
                  src={`/img/partners/${i + 1}.png`} 
                  width={120} 
                  height={40} 
                  className="h-8 md:h-10 w-auto opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" 
                  alt="Broadcast Partner Logo" 
                  unoptimized 
                />
              ))}
            </div>
            <div className="flex items-center gap-12 px-6">
              {[...Array(12)].map((_, i) => (
                <Image 
                  key={`p2-${i}`} 
                  src={`/img/partners/${i + 1}.png`} 
                  width={120} 
                  height={40} 
                  className="h-8 md:h-10 w-auto opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" 
                  alt="Broadcast Partner Logo" 
                  unoptimized 
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* MOVIES / SHOWS / SPORTS SLIDER */}
      <section className="py-20 overflow-hidden relative border-b border-white/5 bg-[#03060C]">
        <div className="text-center mb-8 px-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-3 py-1 rounded-sm mb-3 inline-block">ON-DEMAND ENTERTAINMENT LIBRARY</span>
          <h3 className="text-2xl md:text-3xl font-display font-black italic text-white uppercase tracking-tight">65,000+ MOVIES, TV SERIES & SPORTS EVENTS</h3>
        </div>
        <div className="w-full relative select-none">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#03060C] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#03060C] to-transparent z-10 pointer-events-none" />
          
          <div className="flex flex-col gap-6 py-4">
            <div className="px-4">
              <SliderRow items={[...moviesData, ...moviesData]} />
            </div>
            
            <div className="px-4">
              <SliderRow items={[...seriesData, ...seriesData]} reverse />
            </div>
            
            <div className="px-4">
              <SliderRow items={[...sportsData, ...sportsData]} />
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.08),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-10 md:mb-14">
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-brand)] bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 px-4 py-1.5 rounded-full inline-block mb-5">
              SyntraTV PERFORMANCE & STATS
            </span>

            <h2 className="font-display font-black italic uppercase text-3xl sm:text-4xl md:text-6xl tracking-tight text-white mb-4 leading-none">
              TRUSTED BY THOUSANDS WORLDWIDE
            </h2>
            <p className="text-gray-400 font-medium max-w-2xl mx-auto text-sm md:text-base">
              Our infrastructure is engineered for speed, redundancy, and reliability, delivering high-bitrate streaming without interruptions.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Tv, val: 20, suffix: 'K+', label: 'LIVE TV CHANNELS' },
              { icon: PlayCircle, val: 65, suffix: 'K+', label: 'MOVIES & TV SERIES' },
              { icon: Users, val: 15, suffix: 'K+', label: 'ACTIVE SUBSCRIBERS' },
              { icon: ShieldCheck, val: 99.9, suffix: '%', label: 'GUARANTEED UPTIME' }
            ].map((stat, i) => (
              <ScrollReveal delay={0.1 * i} key={i}>
                <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-brand)]/40">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.12),transparent_70%)]" />

                  <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 flex items-center justify-center text-[var(--color-brand)] mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                    <stat.icon size={22} className="md:w-6 md:h-6" />
                  </div>

                  <div className="relative z-10 flex items-baseline justify-center font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tighter text-white mb-2 md:mb-3">
                    <AnimatedCounter
                      to={stat.val}
                      decimals={stat.val % 1 !== 0 ? 1 : 0}
                    />
                    {stat.suffix}
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-[9px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-gray-300 text-center leading-relaxed">
                      {stat.label}
                    </span>
                    <div className="w-8 md:w-10 h-[2px] bg-[var(--color-brand)]/40 rounded-full mt-3 group-hover:w-14 md:group-hover:w-16 transition-all duration-500" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 relative bg-transparent backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-3 py-1 rounded-sm mb-6 inline-block">SyntraTV IPTV SUBSCRIPTION PLANS</span>
            <h2 className="text-center font-display font-black italic uppercase text-4xl md:text-6xl mb-6 tracking-tight text-white">CHOOSE YOUR PERFECT IPTV PLAN</h2>
            <p className="text-gray-400 font-medium max-w-2xl mx-auto text-base md:text-lg mb-8 leading-relaxed">
              Select the device connections and subscription duration that work best for your home. Enjoy full access to high-speed 4K live TV streaming with instant delivery and zero hidden extra costs.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[#a3a3a3]">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"><ShieldCheck size={14} className="text-[var(--color-brand)]" /> 7-DAY REFUND GUARANTEE</div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"><Zap size={14} className="text-[var(--color-brand)]" /> INSTANT AUTOMATED ACTIVATION</div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"><MessageCircle size={14} className="text-[var(--color-brand)]" /> 24/7 DEDICATED CUSTOMER SUPPORT</div>
            </div>
          </ScrollReveal>

          {/* Device Selection */}
          <ScrollReveal delay={0.2} className="flex flex-col items-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">CHOOSE YOUR SIMULTANEOUS DEVICE CONNECTIONS</span>
            
            <div className="bg-[#0A1128]/40 border border-white/10 rounded-2xl p-2 backdrop-blur-sm">
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { num: '1', icon: Monitor, label: '1 DEVICE', desc: 'Single Screen Setup' },
                  { num: '2', icon: Users, label: '2 DEVICES', desc: 'Duo Home Pack' },
                  { num: '3', icon: Tv, label: '3 DEVICES', desc: 'Family Bundle' }
                ].map((option) => (
                  <label
                    key={option.num}
                    className={`relative flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer group
                      ${devicePlan === option.num 
                        ? 'bg-gradient-to-r from-[var(--color-brand)] to-[#007584] text-black shadow-lg shadow-[var(--color-brand)]/30 scale-105' 
                        : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    <input
                      type="radio"
                      name="devicePlan"
                      value={option.num}
                      checked={devicePlan === option.num}
                      onChange={() => setDevicePlan(option.num)}
                      className="hidden"
                    />
                    <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                      devicePlan === option.num 
                        ? 'border-black bg-black' 
                        : 'border-gray-500 group-hover:border-white'
                    }`}>
                      {devicePlan === option.num && (
                        <div className="w-2 h-2 rounded-full bg-[var(--color-brand)] m-0.5" />
                      )}
                    </div>
                    <option.icon size={16} className={devicePlan === option.num ? 'text-black' : 'text-gray-400 group-hover:text-white'} />
                    <div className="text-left">
                      <div className={`text-xs font-bold uppercase tracking-wider ${devicePlan === option.num ? 'text-black' : 'text-gray-300'}`}>
                        {option.label}
                      </div>
                      <div className={`text-[9px] font-medium ${devicePlan === option.num ? 'text-black/70' : 'text-gray-500'}`}>
                        {option.desc}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-4">
              <Zap size={12} className="text-[var(--color-brand)]" />
              <span className="text-[9px] font-bold uppercase text-gray-500 tracking-widest">SAVE UP TO €137 WITH MULTI-DEVICE ANNUAL PACKAGES</span>
            </div>
          </ScrollReveal>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-7xl mx-auto">
            {(() => {
              const orderedPlans = [...currentPlans];
              const recommendedIndex = orderedPlans.findIndex(p => p.recommended);
              if (recommendedIndex !== -1 && orderedPlans.length === 3) {
                const [recommended] = orderedPlans.splice(recommendedIndex, 1);
                orderedPlans.splice(1, 0, recommended);
              }
              
              return orderedPlans.map((plan, idx) => {
                const monthlyPrice = (parseInt(plan.price.replace('€', '')) / plan.months).toFixed(2);
                
                return (
                  <ScrollReveal delay={0.3 + (idx * 0.1)} key={plan.id} className="h-full">
                    <div className={`relative h-full flex flex-col p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 group/card
                      ${plan.recommended 
                        ? 'bg-gradient-to-b from-[#1a1708] to-[#010307] border-[var(--color-brand)] shadow-[0_0_40px_-15px_var(--color-brand)] hover:shadow-[0_0_60px_-15px_var(--color-brand)] scale-100 md:scale-105 z-10' 
                        : 'bg-[#0A1128]/40 border-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-[var(--color-brand)]/5'
                      }`}>
                      
                      {plan.recommended && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--color-brand)] to-[#008e98] text-black text-[10px] font-black uppercase tracking-widest px-5 py-1.5 rounded-full z-20 shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                          <Star size={10} className="fill-black" />
                          MOST POPULAR VALUE
                        </div>
                      )}

                      <div className="text-center mb-6 pt-4">
                        <h4 className="font-display font-black italic uppercase text-2xl mb-2 text-white group-hover/card:text-[var(--color-brand)] transition-colors duration-300">
                          {plan.name}
                        </h4>
                        
                        <div className="relative overflow-hidden">
                          <div className="font-display font-black text-6xl tracking-tighter mb-1 text-white">
                            <div key={`price-${devicePlan}-${plan.id}`} className="price-roller">
                              <span className="inline-block">{plan.price}</span>
                            </div>
                          </div>
                          <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 transition-colors duration-300 group-hover/card:text-gray-400">
                            {plan.sub}
                          </div>
                          
                          {plan.savings > 0 && (
                            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-3 py-1.5 transition-all duration-300 hover:scale-105">
                              <span className="text-[9px] font-black uppercase text-green-400">SAVE {plan.savingsPercentage}% TODAY</span>
                              <span className="text-[10px] font-bold text-green-400 line-through">€{plan.originalPrice}</span>
                              <span className="text-[9px] font-bold text-green-400">→ {plan.price}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="mt-3">
                          <span className="text-[10px] font-medium text-gray-500 transition-all duration-300">
                            Effective cost: <span key={`monthly-${devicePlan}-${plan.id}`} className="text-[var(--color-brand)] font-bold group-hover/card:text-[#fde047] transition-colors inline-block monthly-roller">€{monthlyPrice}</span>/month
                          </span>
                        </div>
                      </div>

                      <ul className="flex-1 space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-300 transition-all duration-300 group-hover/card:translate-x-1" style={{ transitionDelay: `${i * 30}ms` }}>
                            <CheckCircle2 size={16} className="text-[var(--color-brand)] shrink-0 mt-0.5 transition-transform duration-300 group-hover/card:scale-110" />
                            <span className="text-xs md:text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mb-6 pt-4 border-t border-white/10">
                        <div className="flex items-center justify-between text-[9px] text-gray-500">
                          <div className="flex items-center gap-1.5">
                            <Tv size={12} className="transition-transform duration-300 group-hover/card:rotate-12" />
                            <span key={`device-${devicePlan}`} className="device-update">{devicePlan} Active Connection{devicePlan > '1' && 's'} Included</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Zap size={12} className="transition-all duration-300 group-hover/card:scale-110 group-hover/card:text-[var(--color-brand)]" />
                            <span>Instant Setup</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-2">
                        <button
                          onClick={() => {
                            const message = `Hello! I'm interested in the ${plan.name} plan for ${devicePlan} device(s). Price: ${plan.price}`;
                            window.open(`https://live-support.netlify.app/?text=${encodeURIComponent(message)}`, '_blank');
                          }}
                          className={`w-full py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer
                            ${plan.recommended 
                              ? 'bg-[var(--color-brand)] text-black hover:bg-[#eab308] hover:scale-105' 
                              : 'bg-transparent text-white border border-white/20 hover:bg-[var(--color-brand)] hover:text-black hover:border-transparent hover:scale-105'
                            }`}
                        >
                          <ShoppingCart size={18} className="transition-transform duration-300 group-hover/btn:rotate-12" />
                          <span>SUBSCRIBE NOW</span>
                        </button>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              });
            })()}
          </div>

          {/* 24h Free Trial */}
          <ScrollReveal delay={0.6}>
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => {
                  const message = `Hello! I'm interested in the 24H FREE TEST for your Syntra service.`;
                  window.open(`https://live-support.netlify.app/?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="group w-full md:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-brand)]/10 to-transparent border border-[var(--color-brand)]/30 hover:border-[var(--color-brand)] transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center justify-center gap-3">
                  <Zap size={16} className="text-[var(--color-brand)]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">24H FREE TRIAL AVAILABLE</span>
                  <span className="text-[10px] text-gray-400">|</span>
                  <span className="text-[10px] text-gray-400">Test our servers before you order</span>
                  <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand)] group-hover:translate-x-1 transition-transform duration-300">
                    CLAIM NOW →
                  </div>
                </div>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SERVER MAP */}
      <ServerMap />

      {/* ABOUT US SECTION */}
      <section id="about" className="py-24 relative overflow-hidden bg-[#050B14]">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
               <div className="w-full md:w-1/2 relative">
                  <ScrollReveal>
                     <div className="relative aspect-[4/4] rounded-3xl overflow-hidden border border-white/10">
                        <Image
                          src="/img/about.png"
                          alt="SyntraTV Premium IPTV Streaming Infrastructure"
                          fill
                          quality={75}
                          className="object-cover"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/50 to-transparent mix-blend-multiply"></div>
                     </div>
                     <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[var(--color-brand)]/20 rounded-full blur-[50px]"></div>
                  </ScrollReveal>
               </div>

               <div className="w-full md:w-1/2">
                  <ScrollReveal delay={0.2}>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-3 py-1 rounded-sm mb-4 inline-block">
                        ABOUT SyntraTV
                     </span>

                     <h2 className="font-display font-black italic uppercase text-3xl md:text-5xl mb-6 tracking-tight text-white">
                        THE NEXT GENERATION OF <span className="text-[var(--color-brand)]">IPTV STREAMING</span> FREEDOM
                     </h2>

                     <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 font-medium">
                        SyntraTV was founded to revolutionize home entertainment by offering an all-in-one alternative to overpriced cable packages and fragmented streaming services. We combine thousands of live worldwide broadcasts with an exhaustive on-demand library, giving users instant access to international news, entertainment, pay-per-view fights, and live sports in pristine HD and 4K quality.
                     </p>

                     <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 font-medium">
                        Engineered with advanced anti-freeze server technology, low-latency streaming infrastructure, and multi-device compatibility across Amazon Firestick, Smart TVs, Android, iOS, and PC, SyntraTV provides effortless activation and round-the-clock technical support for uninterrupted viewing anytime, anywhere.
                     </p>

                     <AnimatedButton
                        text="EXPLORE OUR PLANS"
                        href="/pricing"
                        className="!bg-black group-hover:text-black"
                     />
                  </ScrollReveal>
               </div>
            </div>
         </div>
      </section>

      {/* SPORTS & EVENTS SECTION */}
      <section id="sports" className="pb-25 relative overflow-hidden bg-[#050B14]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 relative">
              <ScrollReveal>
                <div className="relative aspect-[4/4] rounded-3xl overflow-hidden border border-white/10">
                  <Image
                    src="/img/supporters.jpg"
                    alt="FIFA World Cup & Live Sports on SyntraTV"
                    fill
                    quality={75}
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/50 to-transparent mix-blend-multiply" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[var(--color-brand)]/20 rounded-full blur-[50px]"></div>
              </ScrollReveal>
            </div>

            <div className="w-full md:w-1/2">
              <ScrollReveal delay={0.2}>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-3 py-1 rounded-sm mb-4 inline-block">
                  LIVE SPORTS & SPECIAL EVENTS
                </span>

                <h2 className="font-display font-black italic uppercase text-3xl md:text-5xl mb-6 tracking-tight text-white">
                  STREAM THE <span className="text-[var(--color-brand)]">FIFA WORLD CUP</span> & CHAMPIONSHIPS IN 4K
                </h2>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 font-medium">
                  Never miss a critical goal, fight night, or match point again. SyntraTV delivers uncompressed live sports feeds covering the FIFA World Cup, UEFA Champions League, English Premier League, La Liga, Serie A, Formula 1, UFC, NFL Sunday Ticket, NBA, and major Pay-Per-View events directly to your screen in smooth 60fps Ultra HD.
                </p>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 font-medium">
                  With dedicated high-capacity channels built specifically for high-traffic sporting events, our anti-freeze framework eliminates buffering and stream lag so you can experience stadium-quality entertainment from the comfort of your living room.
                </p>

                <AnimatedButton
                  text="GET SPORTS ACCESS"
                  href="/pricing"
                  className="!bg-black group-hover:text-black"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 relative bg-[#03060C] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-center font-display font-black italic uppercase text-3xl md:text-5xl mb-4 tracking-tight text-white">TRUSTED BY STREAMERS <span className="text-[var(--color-brand)]">WORLDWIDE</span></h2>
            <p className="text-gray-400 font-medium max-w-2xl mx-auto text-base mb-6">
              Read what verified customers have to say about our stream stability, channel selection, and fast customer service.
            </p>
             <div className="flex gap-1 justify-center mb-4">
               {[1, 2, 3, 4, 5].map(s => <Star key={`stars-${s}`} size={24} className="fill-[var(--color-brand)] text-[var(--color-brand)]" />)}
             </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'ALEX M.', loc: 'FRANCE', text: "SyntraTV has completely replaced my cable setup. The setup process took less than three minutes on my Firestick, and the stream stability during live Champions League matches in 4K is absolutely spotless. WhatsApp customer support is also incredibly fast!", img: "https://i.pravatar.cc/100?img=11" },
              { name: 'DAVID R.', loc: 'GERMANY', text: "The channel lineup is insane—over 20,000 channels and endless VOD movies. Zero buffering or slowdowns even during peak weekend sports hours. Easily the best and most reliable IPTV provider in Australia and USA and Europe. I've ever subscribed to.", img: "https://i.pravatar.cc/100?img=12" },
              { name: 'SOFIA L.', loc: 'NETHERLANDS', text: "Super transparent pricing, instant automated delivery, and extremely crisp 4K picture quality. The 7-day catch-up feature makes it so easy to rewatch missed shows whenever I want. Highly recommended to everyone!", img: "https://i.pravatar.cc/100?img=9" }
            ].map((review, i) => (
              <ScrollReveal delay={0.1*i} key={i}>
                <div className="bg-[#0A1128]/50 border border-white/5 p-8 rounded-3xl h-full flex flex-col hover:border-[var(--color-brand)]/50 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <Image src={review.img} alt={review.name} width={48} height={48} className="w-12 h-12 rounded-full border-2 border-[var(--color-brand)]/50" unoptimized />
                    <div>
                      <h4 className="font-display font-black italic uppercase text-lg leading-none mb-1 text-white">{review.name}</h4>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand)]">{review.loc}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 font-medium italic text-sm md:text-base leading-relaxed">&quot;{review.text}&quot;</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND FEATURES SECTION */}
      <section className="py-24 relative overflow-hidden bg-[#050B14]">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-brand)] mb-4 inline-block">BRAND ADVANTAGE & ARCHITECTURE</span>
            <h2 className="text-center font-display font-black italic uppercase text-4xl md:text-5xl mb-4 tracking-tight text-white">
              ELEVATING DIGITAL <span className="text-[var(--color-brand)]">ENTERTAINMENT</span>
            </h2>
            <p className="text-gray-400 font-medium max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              Streamlining streaming efficiency for modern households through cutting-edge technology, global server distribution, and intuitive device features.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <ScrollReveal delay={0.1}>
              <div className="group relative bg-[#0A1128]/40 border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--color-brand)]/50 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/img/3.jpg"
                    alt="Multi-Screen Streaming Capability"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={75}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display font-black italic uppercase text-xl text-white">Multi-Screen Flexibility</h3>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="group relative bg-gradient-to-br from-[var(--color-brand)]/5 to-transparent border border-[var(--color-brand)]/20 rounded-2xl overflow-hidden hover:border-[var(--color-brand)]/50 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-center">
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--color-brand)]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-[var(--color-brand)]/20 group-hover:border-[var(--color-brand)]">
                    <Monitor size={32} className="text-[var(--color-brand)]" />
                  </div>
                  <h3 className="font-display font-black italic uppercase text-xl mb-3 text-white">
                    Multi-Screen Connection
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Enjoy seamless streaming across Smart TVs, Firestick, smartphones, tablets, and desktops simultaneously with custom multi-room family subscriptions.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="group relative bg-[#0A1128]/40 border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--color-brand)]/50 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/img/1.jpg"
                    alt="Live TV Streaming Setup"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={75}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display font-black italic uppercase text-xl text-white">High-Speed Broadcasts</h3>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal delay={0.4}>
              <div className="group relative bg-gradient-to-br from-[var(--color-brand)]/5 to-transparent border border-[var(--color-brand)]/20 rounded-2xl overflow-hidden hover:border-[var(--color-brand)]/50 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-center">
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--color-brand)]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-[var(--color-brand)]/20 group-hover:border-[var(--color-brand)]">
                    <Tv size={32} className="text-[var(--color-brand)]" />
                  </div>
                  <h3 className="font-display font-black italic uppercase text-xl mb-3 text-white">
                    20,000+ Live Channels
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Access global networks, regional broadcasts, premium movie channels, and live sports in HD and pristine 4K resolution backed by anti-freeze protection.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="group relative bg-[#0A1128]/40 border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--color-brand)]/50 transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/img/2.jpg"
                    alt="Catch-Up TV Interface"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={75}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display font-black italic uppercase text-xl text-white">Catch-Up & Recording</h3>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="group relative bg-gradient-to-br from-[var(--color-brand)]/5 to-transparent border border-[var(--color-brand)]/20 rounded-2xl overflow-hidden hover:border-[var(--color-brand)]/50 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-center">
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--color-brand)]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-[var(--color-brand)]/20 group-hover:border-[var(--color-brand)]">
                    <PlayCircle size={32} className="text-[var(--color-brand)]" />
                  </div>
                  <h3 className="font-display font-black italic uppercase text-xl mb-3 text-white">
                    7-Day Interactive Catch-Up
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Missed your favorite show or live match? Replay past broadcasts anytime with integrated 7-day catch-up and interactive electronic program guides (EPG).
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-[#050B14] relative z-10">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-center text-white font-display font-black italic uppercase text-3xl md:text-5xl mb-2 tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#a3a3a3]">
              EVERYTHING YOU NEED TO KNOW BEFORE YOU SUBSCRIBE TO SyntraTV
            </span>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal delay={0.1 * i} key={i}>
                <div 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer 
                    ${openFaq === i 
                      ? 'bg-white/5 border-[var(--color-brand)]/50' 
                      : 'bg-[#0A1128]/50 border-white/5 hover:border-[var(--color-brand)]/30'
                    }`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setOpenFaq(openFaq === i ? null : i);
                    }
                  }}
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <div className="p-6 flex items-center justify-between text-white text-base md:text-lg font-medium">
                    <h3 className="text-white m-0 text-left pr-4">{faq.q}</h3>
                    <ChevronDown 
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        openFaq === i ? 'rotate-180 text-[var(--color-brand)]' : 'text-gray-500'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  
                  <div 
                    id={`faq-answer-${i}`}
                    className={`transition-all duration-300 ease-in-out ${
                      openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible'
                    }`}
                    aria-hidden={openFaq !== i}
                  >
                    <div className="p-6 pt-0 text-gray-400 font-medium leading-relaxed text-sm md:text-base">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <BlogSection />

      {/* CTA SECTION */}
      <section className="py-20 px-4 relative overflow-hidden bg-transparent backdrop-blur-sm border-t border-white/5">
        <ScrollReveal className="relative z-10">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#00987c] via-[#2cdbf6] to-[#137e99] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden text-black shadow-[0_0_80px_-20px_var(--color-brand)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-display font-black italic text-black uppercase text-4xl md:text-7xl mb-6 tracking-tighter drop-shadow-sm">START STREAMING TONIGHT</h2>
              <p className="text-base sm:text-lg md:text-xl font-bold font-sans text-black/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                Get premium instant access in less than 5 minutes. Connect with our dedicated support agents on WhatsApp or complete your subscription order now.
              </p>
              <AnimatedButton text="OPEN WHATSAPP SUPPORT" href="/contact" className="!bg-black shadow-xl shrink-0 group-hover:text-black" icon={<Phone size={20} className="text-black" />} />
            </div>
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}