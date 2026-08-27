import React, { useState } from 'react';
import { X, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ClubItem } from '../types';

interface FanBattleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectClub?: (club: ClubItem) => void;
}

export const FanBattleModal: React.FC<FanBattleModalProps> = ({ isOpen, onClose, onSelectClub }) => {
  const [selectedClub, setSelectedClub] = useState<string>('Real Madrid');
  const [hasVoted, setHasVoted] = useState(false);

  if (!isOpen) return null;

  const clubs: ClubItem[] = [
    {
      name: 'Real Madrid',
      short: 'RMA',
      color: '#FFFFFF',
      secondaryColor: '#c9a24a',
      supporters: '1.42M Fans',
      powerScore: 94,
      recentForm: 'W-W-W-D-W',
    },
    {
      name: 'FC Barcelona',
      short: 'FCB',
      color: '#A50044',
      secondaryColor: '#004D98',
      supporters: '1.38M Fans',
      powerScore: 92,
      recentForm: 'W-W-L-W-W',
    },
    {
      name: 'Arsenal FC',
      short: 'ARS',
      color: '#EF0107',
      secondaryColor: '#FFFFFF',
      supporters: '980K Fans',
      powerScore: 88,
      recentForm: 'W-D-W-W-D',
    },
    {
      name: 'Manchester City',
      short: 'MCI',
      color: '#6CABDD',
      secondaryColor: '#1C2C5B',
      supporters: '1.15M Fans',
      powerScore: 91,
      recentForm: 'W-W-W-W-D',
    },
    {
      name: 'Paris Saint-Germain',
      short: 'PSG',
      color: '#004170',
      secondaryColor: '#DA291C',
      supporters: '890K Fans',
      powerScore: 86,
      recentForm: 'W-W-D-W-L',
    },
    {
      name: 'Bayern Munich',
      short: 'BAY',
      color: '#DC052D',
      secondaryColor: '#0066B2',
      supporters: '1.05M Fans',
      powerScore: 89,
      recentForm: 'W-W-W-L-W',
    },
  ];

  const handleVote = () => {
    setHasVoted(true);
    const clubObj = clubs.find((c) => c.name === selectedClub);
    if (clubObj && onSelectClub) {
      onSelectClub(clubObj);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-xl rounded-3xl velora-glass p-8 text-left space-y-6 text-[#f6f2fb]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[#c9a24a]">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <span className="eyebrow-gold text-[10px] block">MATCHDAY SHOWDOWN</span>
              <h3 className="font-display text-lg font-medium text-[#f6f2fb]">Fan Battle Arena</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-[#8e80a8] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-xs sm:text-sm text-[#b6a8cc]">
            Select your club and cast fan power toward the active weekly derby leaderboard.
          </p>

          {/* Club Grid Selection */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {clubs.map((club) => {
              const isSelected = selectedClub === club.name;
              return (
                <button
                  key={club.name}
                  onClick={() => {
                    setSelectedClub(club.name);
                    setHasVoted(false);
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    isSelected
                      ? 'bg-white/[0.12] border-[#c9a24a] text-[#f6f2fb]'
                      : 'bg-white/[0.03] border-white/[0.06] hover:border-white/[0.12] text-[#8e80a8]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="w-6 h-6 rounded-md bg-white/[0.08] flex items-center justify-center text-[10px] font-bold text-white">
                      {club.short}
                    </span>
                    <span className="text-[10px] font-mono text-[#c9a24a]">
                      {club.powerScore} PTS
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#f6f2fb] truncate">{club.name}</p>
                  <p className="text-[10px] text-[#786a92] mt-0.5">{club.supporters}</p>
                </button>
              );
            })}
          </div>

          {/* Vote Success Banner */}
          {hasVoted && (
            <div className="p-3.5 rounded-xl bg-[#c9a24a]/10 border border-[#c9a24a]/30 text-[#e6ca85] text-xs flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-[#c9a24a]" />
              <span>Fan vote registered for <strong>{selectedClub}</strong>.</span>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
          <span className="text-xs text-[#8e80a8]">
            Selected: <strong className="text-[#f6f2fb]">{selectedClub}</strong>
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="btn-ghost py-2 px-4 text-xs"
            >
              Close
            </button>
            <button
              onClick={handleVote}
              className="btn-gold py-2 px-5 text-xs"
            >
              <span>{hasVoted ? 'Vote Again' : 'Cast Power'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
