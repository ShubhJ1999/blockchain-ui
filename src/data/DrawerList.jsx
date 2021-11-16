import More from '../assets/images/More.png';
import Documents from '../assets/images/Documents.png';
import Governance from '../assets/images/Governance.png';
import Pools from '../assets/images/Pools.png';
import Statistics from '../assets/images/Statistics.png';
import Tournaments from '../assets/images/Tournaments.png';
import Wallet from '../assets/images/Wallet.png';

export const DrawerList = [
    {
        title: 'Tournaments',
        src: Tournaments
    },    
    {
        title: 'Statistics',
        src: Statistics,
        children: ['Platform', 'TENKA']
    },
    {
        title: 'Pools',
        src: Pools
    },
    {
        title: 'Wallet',
        src: Wallet
    },
    {
        title: 'Governance',
        src: Governance
    },
    {
        title: 'Documents',
        src: Documents
    },
    {
        title: 'More',
        src: More
    }
]