
import React from 'react';
import { PhoneCall } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const ScrollingHelpdesk = () => {
  return (
    <div className="bg-neutral-800 text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex items-center animate-[marquee_20s_linear_infinite]">
            <div className="flex items-center">
              <PhoneCall className="h-4 w-4 mr-2 text-secondary" />
              <span className="font-medium mr-2">Helpdesk:</span>
              <span>011 23350020, 011 23350025</span>
              <span className="mx-3 text-neutral-400">|</span>
              <span className="text-neutral-300">(Mon-Fri, Timing: 0930-1730 Hrs)</span>
              <span className="mx-10"></span>
              {/* Duplicate content for continuous scrolling effect */}
              <PhoneCall className="h-4 w-4 mr-2 text-secondary" />
              <span className="font-medium mr-2">Helpdesk:</span>
              <span>011 23350020, 011 23350025</span>
              <span className="mx-3 text-neutral-400">|</span>
              <span className="text-neutral-300">(Mon-Fri, Timing: 0930-1730 Hrs)</span>
              <span className="mx-10"></span>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default ScrollingHelpdesk;
