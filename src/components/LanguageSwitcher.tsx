import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { locales } from '../../i18n';
import { Menu } from 'lucide-react';
import { Button } from './ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/DropdownMenu';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    // Replace the locale segment in the pathname
    const segments = pathname.split('/');
    
    // The first segment after the initial slash is the locale
    if (segments.length > 1) {
      segments[1] = newLocale;
    }
    
    const newPath = segments.join('/');
    router.push(newPath);
  };

  // Language names displayed in their own language
  const languageNames: Record<string, string> = {
    en: 'English',
    de: 'Deutsch',
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="px-2">
          <Menu className="h-4 w-4 mr-1" />
          <span className="uppercase">{locale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((l) => (
          <DropdownMenuItem 
            key={l} 
            onClick={() => handleLocaleChange(l)}
            className={l === locale ? "bg-muted font-medium" : ""}
          >
            {languageNames[l]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 