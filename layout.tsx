import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'M&A Valuation | From Standalone Value to the Maximum Acquisition Price',description:'An academic guide and interactive laboratory for target valuation, net synergies and acquisition price discipline.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
