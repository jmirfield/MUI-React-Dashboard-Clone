import { AiFillPieChart, AiOutlineSetting } from 'react-icons/ai'
import { CgHome, CgProfile, } from 'react-icons/cg';
import { IoPeople, IoBagHandle, IoNewspaper, IoPersonAddSharp } from 'react-icons/io5'
import { GiPlagueDoctorProfile } from 'react-icons/gi'
import { MdOutlineError } from 'react-icons/md'

export const APP_BAR_SMALL = 64;
export const APP_BAR = 92;
export const DRAWER_WIDTH = 280;

export const FLAGS = [
    {
        label: 'English',
        path: '/static/ic_flag_en.svg'
    },
    {
        label: 'German',
        path: '/static/ic_flag_de.svg'
    },
    {
        label: 'French',
        path: '/static/ic_flag_fr.svg'
    }
]

export const DEMO_ACCOUNT = {
    name: 'Justin Mirfield',
    email: 'justin@test.com',
    photoURL: '/static/avatar.jpg'
}

export const MENU_OPTIONS = [
    {
        label: 'Home',
        icon: CgHome
    },
    {
        label: 'Profile',
        icon: CgProfile
    },
    {
        label: 'Settings',
        icon: AiOutlineSetting
    }
];

export const SIDEBAR_OPTIONS = [
    {
        label: 'Dashboard',
        path: '/dashboard/app',
        icon: AiFillPieChart
    },
    {
        label: 'User',
        path: '/dashboard/user',
        icon: IoPeople
    },
    {
        label: 'Product',
        path: '/dashboard/product',
        icon: IoBagHandle
    },
    {
        label: 'Blog',
        path: '/dashboard/blog',
        icon: IoNewspaper
    },
    {
        label: 'Login',
        path: '',
        icon: GiPlagueDoctorProfile
    }, 
    {
        label: 'Register',
        path: '',
        icon: IoPersonAddSharp
    },
    {
        label: 'Not Found',
        path: 'notfound1234',
        icon: MdOutlineError
    }
]