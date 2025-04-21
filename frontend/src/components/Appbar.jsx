import AppbarLogo from '../assets/scrimba.svg'

export default function Appbar() {

    return <div>
        <nav className="bg-white shadow-md">
            <div className="container mx-auto p-4">
                <div className="flex items-center">
                <div className="w-12 h-12">
                    <img src={AppbarLogo} alt="Logo" className="w-full h-full object-contain" />
                </div>
                </div>
            </div>
        </nav>

    </div>
}