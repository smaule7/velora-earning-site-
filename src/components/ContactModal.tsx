import React, { useState } from 'react';
import { X, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('General Support');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg rounded-3xl velora-glass p-8 text-left space-y-6 text-[#f6f2fb]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/[0.08] text-[#c9a24a] flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <span className="eyebrow-gold text-[10px] block">SUPPORT & GUILDS</span>
              <h3 className="font-display text-lg font-medium text-[#f6f2fb]">Contact Velora</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-[#8e80a8] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#c9a24a]/20 text-[#c9a24a] border border-[#c9a24a]/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-medium text-[#f6f2fb]">Inquiry Sent</h4>
            <p className="text-xs text-[#b6a8cc]">
              Our team will respond to your registered email shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs text-[#b6a8cc]">Topic</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-xs text-white focus:outline-none focus:border-[#c9a24a]"
              >
                <option value="General Support" className="bg-[#0c051a]">General Support & Account</option>
                <option value="AI Academy" className="bg-[#0c051a]">AI Academy Curriculum</option>
                <option value="Fan Battle" className="bg-[#0c051a]">Fan Battle Arena</option>
                <option value="Creator Tools" className="bg-[#0c051a]">YouTube & Creator Suite</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#b6a8cc]">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="creator@velora.io"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-xs text-white placeholder-[#786a92] focus:outline-none focus:border-[#c9a24a]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs text-[#b6a8cc]">Message</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we assist your exploration of Velora?"
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] text-xs text-white placeholder-[#786a92] focus:outline-none focus:border-[#c9a24a] resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-gold w-full py-3 text-xs justify-center"
            >
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
