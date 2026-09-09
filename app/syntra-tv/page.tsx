'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Star, PlayCircle, Tv, Monitor, Smartphone, 
  Box, CheckCircle2, ShoppingCart, Cpu, Wifi, 
  ChevronDown, Zap, Clock, Shield, Phone, Users,
  Check, Server, Film, Layers, Play
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedButton from '@/components/AnimatedButton';

// Marquee Mock Media Data
const moviesData = Array.from({ length: 15 }, (_, i) => 
  `/img/slider/movie_${String(i + 1).padStart(2, '0')}.jpg`
);

const seriesData = Array.from({ length: 15 }, (_, i) => 
  `/img/slider/serie_${String(i + 1).padStart(2, '0')}.webp`
);

const sportsData = Array.from({ length: 10 }, (_, i) => 
  `/img/slider/sport_${String(i + 1).padStart(2, '0')}.jpg`
);

// Marquee Row Component for Content Showcase
const SliderRow = ({ reverse = false, items }: { reverse?: boolean; items: string[] }) => (
  <div className={`flex w-max ${reverse ? 'animate-marquee-slow-reverse' : 'animate-marquee-slow'} hover:pause-on-hover`}>
    <div className="flex items-center gap-4 px-2">
      {items.map((src, i) => (
        <div key={`s1-${i}`} className="relative w-32 md:w-48 aspect-[2/3] rounded-2xl overflow-hidden shrink-0 border border-white/5 hover:border-cyan-400 transition-colors group cursor-pointer shadow-2xl">
          <Image src={src} alt="Syntra TV Content Showcase" fill sizes="(max-width: 768px) 128px, 192px" quality={75} className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
             <PlayCircle size={48} className="text-white drop-shadow-lg" />
          </div>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-4 px-2">
      {items.map((src, i) => (
        <div key={`s2-${i}`} className="relative w-32 md:w-48 aspect-[2/3] rounded-2xl overflow-hidden shrink-0 border border-white/5 hover:border-cyan-400 transition-colors group cursor-pointer shadow-2xl">
          <Image src={src} alt="Syntra TV Content Showcase" fill sizes="(max-width: 768px) 128px, 192px" quality={75} className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
             <PlayCircle size={48} className="text-white drop-shadow-lg" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Pricing Plans Structure
const pricingPlans = [
  {
    id: '3-months',
    name: '3 MONTHS',
    months: 3,
    prices: { 1: 30, 2: 40, 3: 55 },
    features: [
      '20,000+ Live TV Channels Worldwide',
      '65,000+ Movies & Series in 4K/8K',
      'All Premium Sports Networks & Live PPV Events',
      'Netflix, HBO Max, Disney+ & Prime Content',
      'Ultra HD & Anti-Freeze Streaming Infrastructure',
      'Compatible with Firestick, Smart TV, iOS & Android',
      '7-Day Catch-Up TV & Interactive EPG Guide',
      '99.9% High-Speed Guaranteed Server Uptime',
      'Instant Automated Setup Credentials Within 5 Mins',
      'Priority 24/7 Dedicated Technical Support'
    ],
    recommended: false
  },
  {
    id: '12-months',
    name: '12 MONTHS',
    months: 12,
    prices: { 1: 72, 2: 99, 3: 139 },
    features: [
      '20,000+ Live TV Channels Worldwide',
      '65,000+ Movies & Series in 4K/8K',
      'All Premium Sports Networks & Live PPV Events',
      'Netflix, HBO Max, Disney+ & Prime Content',
      'Ultra HD & Anti-Freeze Streaming Infrastructure',
      'Compatible with Firestick, Smart TV, iOS & Android',
      '7-Day Catch-Up TV & Interactive EPG Guide',
      '99.9% High-Speed Guaranteed Server Uptime',
      'Instant Automated Setup Credentials Within 5 Mins',
      'Priority 24/7 Dedicated Technical Support'
    ],
    recommended: true
  },
  {
    id: '6-months',
    name: '6 MONTHS',
    months: 6,
    prices: { 1: 50, 2: 70, 3: 99 },
    features: [
      '20,000+ Live TV Channels Worldwide',
      '65,000+ Movies & Series in 4K/8K',
      'All Premium Sports Networks & Live PPV Events',
      'Netflix, HBO Max, Disney+ & Prime Content',
      'Ultra HD & Anti-Freeze Streaming Infrastructure',
      'Compatible with Firestick, Smart TV, iOS & Android',
      '7-Day Catch-Up TV & Interactive EPG Guide',
      '99.9% High-Speed Guaranteed Server Uptime',
      'Instant Automated Setup Credentials Within 5 Mins',
      'Priority 24/7 Dedicated Technical Support'
    ],
    recommended: false
  }
];

// FAQs Data
const faqs = [
  {
    q: "What is Syntra TV and how does it work?",
    a: "Syntra TV is an enterprise-grade IPTV platform providing direct online streaming to over 20,000 live TV channels and 65,000 VOD movies and series. Instead of relying on traditional cable boxes or satellite dishes, Syntra TV delivers ultra-high-definition content securely through high-bandwidth edge servers straight to your streaming apps."
  },
  {
    q: "How much does a Syntra TV subscription cost?",
    a: "Syntra TV subscriptions are priced simply and transparently: €30 for 3 Months, €50 for 6 Months, and €72 for a full 12 Months. You can also customize your plan based on 1, 2, or 3 simultaneous multi-room device connections."
  },
  {
    q: "Is Syntra TV compatible with Firestick and Smart TVs?",
    a: "Yes. Syntra TV is fully supported across Amazon Fire TV Stick, Android TV, Samsung Tizen Smart TVs, LG WebOS, Apple iOS, Android mobile devices, Windows, and macOS. It functions seamlessly using applications like IPTV Smarters Pro, TiviMate, XCIPTV, and GSE Smart IPTV."
  },
  {
    q: "How fast is account activation after order completion?",
    a: "Account creation is fully automated. Your Xtream Codes API credentials and M3U playlist URLs will be generated and sent directly to your email and WhatsApp within 5 minutes of order confirmation."
  },
  {
    q: "Can I use Syntra TV on multiple devices simultaneously?",
    a: "Yes. Using the connection switch on our pricing menu, you can configure your subscription for up to 3 simultaneous multi-room connections under one active plan."
  },
  {
    q: "What internet speed is required for 4K streams?",
    a: "We recommend a minimum internet connection speed of 15 Mbps for Full HD 1080p channels and 25 Mbps or higher for uninterrupted 4K Ultra HD live broadcasts and PPV events."
  }
];

export default function SyntraTVPage() {
  const [devicePlan, setDevicePlan] = useState<string>('1');
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
    <main className="min-h-screen bg-[#03070D] text-white font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden relative">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-[-1]">
        <Image 
          src="/img/bg.jpg" 
          alt="Syntra TV Background" 
          fill 
          priority 
          quality={75} 
          className="object-cover opacity-15" 
          unoptimized 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03070D]/60 via-[#03070D]/90 to-[#03070D]"></div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee-slow { animation: marquee 50s linear infinite; }
        .animate-marquee-slow-reverse { animation: marquee-reverse 50s linear infinite; }
        .pause-on-hover:hover { animation-play-state: paused; }
      `}} />

      {/* 1. HERO HEADER */}
      <section className="pt-28 pb-16 px-4 relative flex flex-col items-center text-center max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 bg-cyan-950/40 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
            <Zap size={14} className="text-cyan-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-white">OFFICIAL SYNTRA TV BRAND PLATFORM</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-display font-black italic uppercase text-3xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-6 text-white">
            SYNTRA TV – <span className="text-cyan-400">ULTRA 4K LIVE TV</span> & SPORTS STREAMING
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-white text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
            Stream 20,000+ live channels and 65,000+ VOD movies in crisp 4K Ultra HD. Enjoy automated instant setup on Firestick, Smart TVs, Android, and iOS with zero buffering.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto">
          <AnimatedButton text="SUBSCRIBE NOW" href="/pricing" className="w-full sm:w-auto shadow-[0_0_25px_rgba(6,182,212,0.3)] bg-cyan-500 hover:bg-cyan-400 text-cyan-800 border-cyan-400" />
          <a href="#about" className="h-[3.25rem] px-8 bg-white/5 border border-white/10 text-white rounded-full font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 hover:border-cyan-500/40 transition-colors w-full sm:w-auto text-xs">
            EXPLORE SYNTRA TV
          </a>
        </ScrollReveal>

        {/* Device Badges */}
        <ScrollReveal delay={0.4} className="flex items-center justify-center gap-6 sm:gap-12 flex-wrap">
          {[ 
            { icon: Smartphone, label: 'ANDROID / IOS' }, 
            { icon: Monitor, label: 'DESKTOP / MAC' }, 
            { icon: Tv, label: 'SMART TVS' }, 
            { icon: Box, label: 'FIRE TV & BOXES' } 
          ].map((device, i) => (
             <div key={i} className="flex flex-col items-center gap-2 text-white hover:text-cyan-400 transition-colors">
               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                 <device.icon size={20} />
               </div>
               <span className="text-[9px] font-bold tracking-widest uppercase text-white">{device.label}</span>
             </div>
          ))}
        </ScrollReveal>
      </section>

      {/* 2. REAL-TIME STATS COUNTER BAR */}
      <section className="py-8 bg-cyan-950/20 border-y border-cyan-500/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col items-center justify-center p-4">
              <Tv size={24} className="text-cyan-400 mb-2" />
              <div className="font-display font-black text-3xl sm:text-4xl text-white">20K+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-white mt-1">Live Channels</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col items-center justify-center p-4">
              <Film size={24} className="text-cyan-400 mb-2" />
              <div className="font-display font-black text-3xl sm:text-4xl text-white">65K+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-white mt-1">VOD Movies & Series</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col items-center justify-center p-4">
              <Users size={24} className="text-cyan-400 mb-2" />
              <div className="font-display font-black text-3xl sm:text-4xl text-white">50K+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-white mt-1">Active Subscribers</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col items-center justify-center p-4">
              <Server size={24} className="text-cyan-400 mb-2" />
              <div className="font-display font-black text-3xl sm:text-4xl text-white">99.9%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-white mt-1">Uptime Reliability</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. PRICING SECTION */}
      <section id="pricing" className="py-24 relative bg-[#050C18]/80 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full inline-block mb-4">
              SYNTRA TV PLANS & PRICING
            </span>
            <h2 className="font-display font-black italic uppercase text-3xl sm:text-5xl text-white tracking-tight mb-4">
              SELECT YOUR <span className="text-cyan-400">SYNTRA TV</span> SUBSCRIPTION
            </h2>
            <p className="text-white font-medium max-w-2xl mx-auto text-sm sm:text-base">
              Choose your simultaneous device connections and subscription duration. Instant automated activation with zero contractual obligations.
            </p>
          </ScrollReveal>

          {/* Device Selection Toggle */}
          <ScrollReveal delay={0.2} className="flex flex-col items-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-white mb-6">SELECT SIMULTANEOUS CONNECTIONS</span>
            <div className="bg-[#0A1128]/60 border border-white/10 rounded-2xl p-2">
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { num: '1', icon: Monitor, label: '1 DEVICE', desc: 'Single Connection' },
                  { num: '2', icon: Smartphone, label: '2 DEVICES', desc: 'Duo Connections' },
                  { num: '3', icon: Tv, label: '3 DEVICES', desc: 'Family Connections' }
                ].map((option) => (
                  <button
                    key={option.num}
                    onClick={() => setDevicePlan(option.num)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                      devicePlan === option.num 
                        ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 font-bold' 
                        : 'bg-transparent text-white hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <option.icon size={16} />
                    <div className="text-left">
                      <div className="text-xs font-bold uppercase tracking-wider">{option.label}</div>
                      <div className="text-[9px] opacity-80">{option.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
            {currentPlans.map((plan, idx) => {
              return (
                <ScrollReveal delay={0.1 * idx} key={plan.id} className="h-full">
                  <div className={`relative h-full flex flex-col p-8 rounded-3xl border transition-all duration-500
                    ${plan.recommended 
                      ? 'bg-gradient-to-b from-cyan-950/40 to-[#010307] border-cyan-400 shadow-[0_0_40px_-15px_rgba(6,182,212,0.4)] md:-translate-y-2' 
                      : 'bg-[#0A1128]/40 border-white/10 hover:border-cyan-500/40'
                    }`}>
                    
                    {plan.recommended && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-black text-[10px] font-black uppercase tracking-widest px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                        <Star size={10} className="fill-black" /> MOST POPULAR VALUE
                      </div>
                    )}

                    <div className="text-center mb-6 pt-4">
                      <h3 className="font-display font-black italic uppercase text-2xl mb-2 text-white">{plan.name}</h3>
                      <div className="font-display font-black text-5xl text-white">{plan.price}</div>
                      <div className="text-xs font-bold uppercase tracking-widest text-white mb-2">{plan.sub}</div>
                      {plan.savings > 0 && (
                        <span className="inline-block text-[10px] font-extrabold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full">
                          SAVE {plan.savingsPercentage}% (€{plan.savings})
                        </span>
                      )}
                    </div>

                    <ul className="flex-1 space-y-3 mb-8 text-white">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs md:text-sm font-medium">
                          <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => {
                        const message = `Hello! I would like to order the Syntra TV ${plan.name} plan for ${devicePlan} device(s) at ${plan.price}.`;
                        window.open(`https://live-support.netlify.app/?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                      className={`w-full py-4 rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-300 flex items-center justify-center gap-2
                        ${plan.recommended 
                          ? 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-lg shadow-cyan-500/20' 
                          : 'bg-transparent text-white border border-white/20 hover:bg-cyan-500 hover:text-black hover:border-cyan-500'
                        }`}
                    >
                      <ShoppingCart size={16} />
                      <span>ORDER SYNTRA TV NOW</span>
                    </button>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* 24H Free Trial Banner */}
          <ScrollReveal delay={0.4} className="mt-16 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h4 className="font-display font-black italic uppercase text-lg text-white mb-1">TEST SYNTRA TV RISK-FREE</h4>
                <p className="text-xs text-white">Request a 24-Hour Trial account to experience our channel quality firsthand before committing.</p>
              </div>
              <a 
                href="https://live-support.netlify.app/?text=Hello!%20I%20would%20like%20to%20request%20a%2024H%20Free%20Trial%20for%20Syntra%20TV." 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-full font-bold text-xs uppercase tracking-wider shrink-0 transition-colors border border-cyan-500/30"
              >
                REQUEST 24H TRIAL
              </a>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 4. MEDIA SLIDERS */}
      <section className="py-20 overflow-hidden relative border-b border-white/5 bg-[#03060C]">
        <div className="text-center mb-10 px-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-sm mb-3 inline-block">UNLIMITED VOD & LIVE SPORTS</span>
          <h3 className="text-2xl md:text-4xl font-display font-black italic text-white uppercase tracking-tight">SYNTRA TV ON-DEMAND CATALOG</h3>
        </div>
        <div className="w-full relative select-none">
          <div className="flex flex-col gap-6 py-2">
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

      {/* 5. BRAND & NETWORK MARQUEE */}
      <section className="py-12 border-b border-white/5 bg-[#020408]">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-8">
          COMPATIBLE WITH ALL MAJOR SPORTS & ENTERTAINMENT NETWORKS
        </p>
        <div className="w-full overflow-hidden relative select-none">
          <div className="flex w-max animate-marquee">
            <div className="flex items-center gap-12 px-6">
              {[...Array(12)].map((_, i) => (
                <Image 
                  key={`p1-${i}`} 
                  src={`/img/partners/${i + 1}.png`} 
                  width={120} 
                  height={40} 
                  className="h-8 md:h-10 w-auto opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" 
                  alt="Partner Network" 
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
                  alt="Partner Network" 
                  unoptimized 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SPLIT SECTION A: WHAT IS SYNTRA TV? (IMAGE LEFT / TEXT RIGHT) */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Graphic / Image Preview */}
          <ScrollReveal>
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-950/30 to-black relative flex items-center justify-center p-8 group hover:border-cyan-500/40 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent"></div>
              <div className="text-center relative z-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-400 group-hover:scale-110 transition-transform">
                  <PlayCircle size={32} />
                </div>
                <h3 className="font-display font-black italic text-xl uppercase text-white">4K ENTERPRISE NETWORK</h3>
                <p className="text-xs text-white max-w-sm mx-auto">Load-balanced edge infrastructure guaranteeing zero buffering worldwide.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side: Detailed Copy */}
          <ScrollReveal delay={0.2}>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">COMPLETE STREAMING OVERVIEW</span>
            <h2 className="font-display font-black italic uppercase text-3xl sm:text-4xl text-white tracking-tight mb-6">
              What is <span className="text-cyan-400">Syntra TV</span> and How Does it Work?
            </h2>
            <div className="space-y-4 text-white text-sm sm:text-base leading-relaxed">
              <p className="text-white">
                <strong>Syntra TV</strong> is an enterprise-grade digital IPTV network built to eliminate expensive cable contracts and bulky hardware boxes. Powered by decentralized edge server routing, Syntra TV streams over 20,000 live TV channels and 65,000 VOD movies directly to your favorite device.
              </p>
              <p className="text-white">
                Leveraging high-efficiency H.265 (HEVC) compression codecs, the <strong>Syntra TV platform</strong> delivers uncompressed 1080p and high-bitrate 4K Ultra HD streams with minimal bandwidth strain, ensuring smooth playback even during peak worldwide sports broadcasts.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 7. FEATURE GRID: WHY STREAMERS CHOOSE SYNTRA TV */}
      <section className="py-20 bg-[#050C18] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">HIGH-PERFORMANCE INFRASTRUCTURE</span>
            <h2 className="font-display font-black italic uppercase text-3xl sm:text-5xl text-white tracking-tight">
              Why Streamers Choose <span className="text-cyan-400">Syntra TV</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Cpu,
                title: 'Anti-Freeze Tech',
                desc: 'Integrated edge-node balancing dynamically redirects traffic away from congested routes, suppressing buffering during live events.'
              },
              {
                icon: Wifi,
                title: '4K/60FPS Quality',
                desc: 'Experience crisp 1080p Full HD and high-bitrate 4K Ultra HD streams for live television networks, movies, and high-speed sports.'
              },
              {
                icon: Clock,
                title: '7-Day Catch-Up & EPG',
                desc: 'Never miss a show with our built-in 7-day catch-up replay feature and fully synchronized Electronic Program Guide (EPG).'
              },
              {
                icon: Shield,
                title: '24/7 Dedicated Support',
                desc: 'Our customer support team is available 24/7 via WhatsApp and email to assist with app setup, installation, and general inquiries.'
              }
            ].map((feat, i) => (
              <ScrollReveal delay={0.1 * i} key={i}>
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/50 transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6 border border-cyan-500/20">
                    <feat.icon size={24} />
                  </div>
                  <h3 className="font-display font-black italic text-lg text-white mb-3 uppercase">{feat.title}</h3>
                  <p className="text-xs text-white leading-relaxed">{feat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. STEP-BY-STEP INSTALLATION (FIXED MOBILE STEP BADGES) */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">STEP-BY-STEP WORKFLOW</span>
            <h2 className="font-display font-black italic uppercase text-3xl sm:text-5xl text-white tracking-tight mb-4">
              How to Install <span className="text-cyan-400">Syntra TV</span> on Any Device
            </h2>
            <p className="text-white text-sm sm:text-base">
              Setting up your subscription requires no specialized hardware. Follow these 3 simple steps:
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Download Player App',
              desc: 'Install IPTV Smarters Pro, TiviMate, XCIPTV, or GSE Smart IPTV from your device store or via Downloader on Amazon Firestick.'
            },
            {
              step: '02',
              title: 'Enter Credentials',
              desc: 'Open your installed player app, select "Add User with Xtream Codes API", and type in the Server URL, Username, and Password.'
            },
            {
              step: '03',
              title: 'Start Streaming 4K',
              desc: 'Your live channels, interactive EPG guide, and video-on-demand media libraries will automatically populate in seconds.'
            }
          ].map((item, i) => (
            <ScrollReveal delay={0.1 * i} key={i}>
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-colors flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 text-white font-black flex items-center justify-center text-lg mb-4 shrink-0 border border-white/20">
                  {item.step}
                </div>
                <h3 className="font-display font-black italic text-xl text-white mb-3 uppercase">{item.title}</h3>
                <p className="text-xs text-white leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 9. SPLIT SECTION B: EXPERIENCE PREMIUM 4K QUALITY (TEXT LEFT / IMAGE RIGHT) */}
      <section className="py-20 bg-[#050C18] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Text & Checklist */}
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">UNMATCHED PERFORMANCE</span>
              <h2 className="font-display font-black italic uppercase text-3xl sm:text-4xl text-white tracking-tight mb-6">
                Experience Premium <span className="text-cyan-400">4K Ultra HD</span> Streaming
              </h2>
              <p className="text-white text-sm sm:text-base leading-relaxed mb-6">
                Syntra TV provides direct high-bitrate streaming routes for sports, cinema, and live international channels without buffering interruptions.
              </p>
              <ul className="space-y-3 text-white text-xs sm:text-sm">
                {[
                  'Uncompressed 60FPS streams for UFC, Premier League, F1, and Champions League',
                  'Dedicated IPTV M3U and Xtream Codes API playlist support',
                  'Instant electronic guide (EPG) automatic updates across all devices'
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Right Side: Graphic Box */}
            <ScrollReveal delay={0.2}>
              <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-bl from-cyan-950/30 to-black relative flex items-center justify-center p-8 group hover:border-cyan-500/40 transition-colors">
                <div className="text-center relative z-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-400 group-hover:scale-110 transition-transform">
                    <Tv size={32} />
                  </div>
                  <h3 className="font-display font-black italic text-xl uppercase text-white">60FPS HIGH-BITRATE SPORTS</h3>
                  <p className="text-xs text-white max-w-sm mx-auto">Zero-lag sports coverage with real-time audio synchronization.</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* 10. SPLIT SECTION C: MULTI-DEVICE COMPATIBILITY (IMAGE LEFT / TEXT RIGHT) */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Visual App Box */}
          <ScrollReveal>
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-tr from-cyan-950/30 to-black relative flex items-center justify-center p-8 group hover:border-cyan-500/40 transition-colors">
              <div className="text-center relative z-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mx-auto text-cyan-400 group-hover:scale-110 transition-transform">
                  <Layers size={32} />
                </div>
                <h3 className="font-display font-black italic text-xl uppercase text-white">UNIVERSAL APP SUPPORT</h3>
                <p className="text-xs text-white max-w-sm mx-auto">Seamless integration with IPTV Smarters, TiviMate, and XCIPTV.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Side: Detailed Copy */}
          <ScrollReveal delay={0.2}>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">MULTI-PLATFORM ECOSYSTEM</span>
            <h2 className="font-display font-black italic uppercase text-3xl sm:text-4xl text-white tracking-tight mb-6">
              Multi-Device & <span className="text-cyan-400">App Compatibility</span>
            </h2>
            <p className="text-white text-sm sm:text-base leading-relaxed mb-6">
              Whether you prefer streaming on a big screen in your living room or taking your subscription on the go with your mobile phone, Syntra TV works everywhere smoothly.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1 uppercase">TV Players</h4>
                <p className="text-xs text-white">IPTV Smarters Pro, TiviMate, XCIPTV Player, GSE IPTV.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <h4 className="font-bold text-white text-sm mb-1 uppercase">Smart OS</h4>
                <p className="text-xs text-white">Firestick, Android TV, Samsung Tizen, LG WebOS, iOS, Mac, PC.</p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 11. CUSTOMER TESTIMONIALS */}
      <section className="py-20 bg-[#050C18] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">VERIFIED STREAMER REVIEWS</span>
            <h2 className="font-display font-black italic uppercase text-3xl sm:text-5xl text-white tracking-tight">
              Trusted by <span className="text-cyan-400">50,000+ Customers</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marcus V.",
                location: "United Kingdom",
                quote: "Syntra TV is by far the most stable IPTV provider I have used for live sports. Zero freezing during Premier League matches."
              },
              {
                name: "David K.",
                location: "Germany",
                quote: "Setup took less than 3 minutes on my Firestick with TiviMate. The 4K picture quality and movie library are phenomenal."
              },
              {
                name: "Antoine M.",
                location: "France",
                quote: "Customer support on WhatsApp helped me configure my multi-room setup in minutes. Outstanding platform reliability!"
              }
            ].map((rev, i) => (
              <ScrollReveal delay={0.1 * i} key={i}>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex gap-1 text-cyan-400 mb-4">
                      {[...Array(5)].map((_, s) => <Star key={s} size={16} className="fill-cyan-400" />)}
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-6 italic">&quot;{rev.quote}&quot;</p>
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{rev.name}</div>
                    <div className="text-xs text-white">{rev.location}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12. SEARCH-INTENT FAQ ACCORDION */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="font-display font-black italic uppercase text-3xl sm:text-5xl text-white tracking-tight">
            Syntra TV <span className="text-cyan-400">Help Center</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal delay={0.05 * i} key={i}>
              <div className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base hover:bg-white/[0.02] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={20} className={`text-cyan-400 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-white text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-4">
                    <p className="text-white">{faq.a}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 13. BOTTOM CONVERSION CTA BANNER */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="p-10 md:p-16 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-[#0A1128] to-black border border-cyan-500/40 text-center relative overflow-hidden shadow-[0_0_50px_-20px_rgba(6,182,212,0.3)]">
            <h2 className="font-display font-black italic uppercase text-3xl sm:text-5xl text-white tracking-tight mb-4">
              UPGRADE YOUR <span className="text-cyan-400">ENTERTAINMENT EXPERIENCE</span> TODAY
            </h2>
            <p className="text-white text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Join 50,000+ satisfied users and gain immediate instant access to 20,000+ live TV channels and 65,000+ VOD titles in Ultra 4K HD.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AnimatedButton text="GET INSTANT ACCESS" href="#pricing" className="w-full sm:w-auto shadow-[0_0_25px_rgba(6,182,212,0.4)] bg-cyan-500 hover:bg-cyan-400 text-black border-cyan-400" />
              <a 
                href="https://live-support.netlify.app/?text=Hello!%20I%20have%20a%20question%20about%20Syntra%20TV." 
                target="_blank" 
                rel="noreferrer"
                className="h-[3.25rem] px-8 bg-white/5 border border-white/10 text-white rounded-full font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition-colors w-full sm:w-auto text-xs"
              >
                <Phone size={14} className="text-cyan-400" /> WHATSAPP SUPPORT
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}