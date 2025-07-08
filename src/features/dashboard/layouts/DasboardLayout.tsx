import { Outlet, useLocation, useNavigate } from "react-router"

import { Plus, Download, Bell, Settings, LogOut, Home, Building2, Calendar, Mail, BarChart2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useDispatch } from "react-redux"
import { logout } from "@/redux/authSlice"

const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: Home },
    { id: "schedules", name: "Schedules", icon: Calendar },
    { id: "email", name: "Email", icon: Mail },
    { id: "task", name: "Task", icon: BarChart2 },
];

export default function DashboardLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const currentTab = location.pathname.split("/").pop() || "dashboard";

    const handleClick = (id: string) => {
        navigate(`/${id}`);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate("/account/login", { replace: true });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
                <div className="flex h-full flex-col">
                    {/* Logo */}
                    <div className="flex h-16 items-center justify-center border-b border-gray-200">
                        <div className="flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded bg-green-600">
                                <Building2 className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900">CRM LAW</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-1 px-4 py-4">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleClick(item.id)}
                                className={`flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${currentTab === item.id
                                    ? "bg-green-100 text-green-700"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                    }`}
                            >
                                <item.icon className="h-5 w-5" />
                                <span>{item.name}</span>
                            </button>
                        ))}
                    </nav>

                    {/* User Profile */}
                    <div className="border-t border-gray-200 p-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="w-full justify-start space-x-3 px-3">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                        <AvatarFallback className="bg-green-600 text-white">JD</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 text-left">
                                        <p className="text-sm font-medium text-gray-900">Juan Pérez</p>
                                        <p className="text-xs text-gray-500">Administrador</p>
                                    </div>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    Configuración
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={handleLogout}>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Cerrar Sesión
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="pl-64">
                {/* Header */}
                <header className="bg-white shadow-sm border-b border-gray-200">
                    <div className="flex h-16 items-center justify-between px-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                            <p className="text-sm text-gray-600">Bienvenido de vuelta, Juan</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button variant="outline" size="sm">
                                <Download className="mr-2 h-4 w-4" />
                                Exportar
                            </Button>
                            <Button className="bg-green-600 hover:bg-green-700">
                                <Plus className="mr-2 h-4 w-4" />
                                Nuevo Lead
                            </Button>
                            <Button variant="ghost" size="sm">
                                <Bell className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
