import React from 'react';
import { X, FileText } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-xl max-h-[85vh] rounded-3xl velora-glass p-8 text-left space-y-6 text-[#f6f2fb] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/[0.08] text-[#c9a24a] flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="eyebrow-gold text-[10px] block">GOVERNANCE & PRIVACY</span>
              <h3 className="font-display text-lg font-medium text-[#f6f2fb]">Terms & Guidelines</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-[#8e80a8] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 text-xs text-[#b6a8cc] leading-relaxed pr-2">
          <div className="space-y-1">
            <h4 className="font-display text-sm font-semibold text-[#f6f2fb]">1. Platform Governance & Authenticity</h4>
            <p>
              VELORA operates as a multi-experience digital platform providing AI education, creator tooling, publication access, community channels, and sports entertainment challenges. All participation is subject to community standards and authentic user engagement.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="font-display text-sm font-semibold text-[#f6f2fb]">2. Activity Milestone Recognition</h4>
            <p>
              Activity points, completion badges, and progression milestones are awarded strictly based on transparent verification protocols tied directly to active participation (e.g. course progress, article completion, fan votes).
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="font-display text-sm font-semibold text-[#f6f2fb]">3. Data Privacy & Security</h4>
            <p>
              We prioritize user confidentiality and security. User accounts utilize encrypted identification protocols without selling personal telemetry to third parties.
            </p>
          </div>

          <div className="space-y-1">
            <h4 className="font-display text-sm font-semibold text-[#f6f2fb]">4. Creator Ownership</h4>
            <p>
              Users retain ownership of content and workflows structured through AI Academy and creator tools in accordance with underlying model licenses.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
          <span className="text-[11px] text-[#786a92]">
            Protocol Standard 2026
          </span>
          <button
            onClick={onClose}
            className="btn-gold py-2 px-5 text-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
