import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Image, ShieldAlert, ChevronRight, CheckCircle2 } from 'lucide-react';

export function AdminGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [requestedFeature, setRequestedFeature] = useState<string | null>(null);

  const imagesToUpload = [
    { name: 'swadam-logo.jpg', desc: 'Brand logo (Ideally circular or square, 1:1 ratio)', target: 'Swadam logo on Header, Basket & Footer' },
    { name: 'salted.jpg', desc: 'Appetizing plate of yellow Salted Shankarpali (4:3 aspect ratio)', target: 'Salted Shankarpali product card & gallery' },
    { name: 'tangy.jpg', desc: 'Tangy, spice-dusted red Tangy Shankarpali (4:3 aspect ratio)', target: 'Tangy Shankarpali product card & gallery' },
    { name: 'chivda.jpg', desc: 'Delicious plate of golden roasted Special Chivda (4:3 aspect ratio)', target: 'Special Chivda product card & gallery' },
    { name: 'about-us.jpg', desc: 'Your home kitchen setup or you cooking (3:4 or 4:3 aspect ratio)', target: 'Heritage personal profile photo area' }
  ];

  const suggestedFeatures = [
    {
      title: 'Festive Faral Hamper Builder',
      desc: 'Allow buyers to visually mix-and-match Poha Chivda, Salty Shankarpali, and Tangy Shankarpali into customized festive boxes. Customers can add customized printed gift labels and greeting cards!'
    },
    {
      title: 'Pune Delivery Estimator & Zone Calculator',
      desc: 'An interactive zone selector that estimates local Dunzo, Porter, or parcel courier pricing in real-time based on their Pune sub-locality (e.g. Kothrud, Baner, Hadapsar).'
    },
    {
      title: 'Festival Pre-Booking Scheduler',
      desc: 'Let clients pre-book their batches weeks in advance of grand Indian festivals like Diwali, Holi, or Ganesh Chaturthi, helping Vidya Dandekar map out her cooking batches and ingredient planning.'
    },
    {
      title: 'Interactive Taste Intensity Slider',
      desc: 'An adjustable custom taste-meter (Mild / Medium / Spicy) for the Chivda and Tangy Shankarpali, helping Vidya tai customize the hand-roasted spice blend per buyer preference!'
    },
    {
      title: 'Visual Order Progress Tracker',
      desc: 'Since ordering is via WhatsApp, a visual "Order Step Tracker" on the site showing: "Order Received" → "Ingredients Sourced" → "Snacks Being Prepared Fresh" → "Packed with Love" → "Out for Delivery".'
    }
  ];

  const handleFeatureRequest = (title: string) => {
    setRequestedFeature(title);
    setTimeout(() => {
      setRequestedFeature(null);
    }, 4000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mb-12">
      <div className="bg-[var(--surface)] border-2 border-dashed border-[var(--border)] rounded-[24px] p-6 sm:p-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider bg-white/5 px-2.5 py-1 rounded-md border border-[var(--border)]">
              <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />
              <span>Owner & Developer Guide</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[var(--text)] tracking-wide">How to Upload Your Food Photos & Customize Swadam Foods</h3>
            <p className="text-xs text-[var(--text-muted)]">
              We have designed the website to be extremely easy to update. Read the guide below to make the site fully yours!
            </p>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn-modern text-xs font-bold px-5 py-3 rounded-full cursor-pointer bg-[var(--text)] text-[var(--bg)] whitespace-nowrap select-none hover:bg-[var(--accent)] hover:text-white transition-all"
          >
            {isOpen ? 'Close Admin & Feature Guide' : 'Open Admin & Feature Guide'}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-6 pt-6 border-t border-[var(--border)] space-y-8"
            >
              
              {/* Feature Selection Toast Notification Alternative */}
              <AnimatePresence>
                {requestedFeature && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-emerald-950/40 border border-emerald-500/25 text-emerald-300 rounded-xl flex items-center gap-2.5 text-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <span className="font-bold">Fantastic idea!</span> I would love to build the <strong>{requestedFeature}</strong> next. Just type this request in our chat box!
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Section 1: Upload Instructions */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text)] flex items-center gap-2">
                  <Image className="w-4.5 h-4.5 text-[var(--gold)]" />
                  <span>1. Uploading Your Own Photos</span>
                </h4>
                
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  The website is programmed with an <strong>image fallback system</strong>. When the page loads, it looks for standard files in your public directory. If it doesn't find them, it displays beautiful high-quality Indian food stock photos from Unsplash.
                </p>

                <div className="bg-white/5 rounded-2xl border border-[var(--border)] p-4 space-y-4">
                  <p className="text-xs font-bold text-[var(--text)]">To replace placeholder photos with your actual products, upload these filenames to your <span className="font-mono bg-white/10 px-1 py-0.5 rounded text-[var(--gold)]">public/</span> folder:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {imagesToUpload.map((img) => (
                      <div key={img.name} className="p-3 bg-white/5 rounded-xl border border-[var(--border)] flex gap-2.5 items-start">
                        <div className="w-5 h-5 rounded-full bg-[var(--accent)] text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                          ✓
                        </div>
                        <div>
                          <span className="font-mono text-xs font-bold text-[var(--accent)] block">{img.name}</span>
                          <span className="text-[11px] text-[var(--text-muted)] block mt-0.5 leading-relaxed">{img.desc}</span>
                          <span className="text-[10px] text-[var(--text-muted)] opacity-60 block mt-1 italic">Used for: {img.target}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 bg-white/5 rounded-xl text-[var(--text-muted)] text-xs flex items-start gap-2 border border-[var(--border)]">
                    <ShieldAlert className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      <strong>Pro-tip:</strong> Please ensure that your uploaded image filenames are in <strong>all lowercase</strong> and spelled exactly as listed above (including the `.jpg` extension). Once uploaded, the website will automatically reload and show your personal homemade snacks!
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 2: Future Proposed Features */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text)] flex items-center gap-2">
                  <Sparkles className="w-4.5 h-4.5 text-[var(--gold)]" />
                  <span>2. Dynamic Features We Can Add Next</span>
                </h4>
                
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  As requested, here is a list of stellar features we can add next to expand Swadam Foods' digital presence. Click any feature below to indicate your interest!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {suggestedFeatures.map((feat, idx) => (
                    <div key={idx} className="bg-white/5 p-5 rounded-2xl border border-[var(--border)] hover:border-[var(--border-hover)] shadow-sm space-y-3 flex flex-col justify-between transition-all">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-[var(--accent)] bg-white/10 px-2 py-0.5 rounded">#0{idx+1}</span>
                          <h5 className="font-serif text-sm font-bold text-[var(--text)]">{feat.title}</h5>
                        </div>
                        <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">{feat.desc}</p>
                      </div>
                      <button
                        onClick={() => handleFeatureRequest(feat.title)}
                        className="text-[10px] font-bold text-[var(--gold)] hover:text-[var(--accent)] flex items-center gap-1 hover:underline pt-2 cursor-pointer mt-auto"
                      >
                        <span>Build this feature</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
