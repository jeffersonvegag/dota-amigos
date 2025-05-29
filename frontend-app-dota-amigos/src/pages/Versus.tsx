import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

// Datos de ejemplo de jugadores
const teamLeft = [
  { id: 1, name: "Player 1", avatar: "/api/placeholder/40/40", hero: "Pudge" },
  { id: 2, name: "Player 2", avatar: "/api/placeholder/40/40", hero: "Invoker" },
  { id: 3, name: "Player 3", avatar: "/api/placeholder/40/40", hero: "Crystal Maiden" },
  { id: 4, name: "Player 4", avatar: "/api/placeholder/40/40", hero: "Anti-Mage" },
  { id: 5, name: "Player 5", avatar: "/api/placeholder/40/40", hero: "Drow Ranger" },
]

const teamRight = [
  { id: 6, name: "Player 6", avatar: "/api/placeholder/40/40", hero: "Shadow Fiend" },
  { id: 7, name: "Player 7", avatar: "/api/placeholder/40/40", hero: "Phantom Assassin" },
  { id: 8, name: "Player 8", avatar: "/api/placeholder/40/40", hero: "Lina" },
  { id: 9, name: "Player 9", avatar: "/api/placeholder/40/40", hero: "Axe" },
  { id: 10, name: "Player 10", avatar: "/api/placeholder/40/40", hero: "Sniper" },
]

export default function Versus() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Versus Match</h1>
          <p className="text-slate-300">Equipos listos para la batalla</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Equipo Izquierdo */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-red-400 mb-6">
              Team Radiant
            </h2>
            {teamLeft.map((player) => (
              <Card key={player.id} className="bg-red-900/20 border-red-500/30 hover:bg-red-900/30 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12 border-2 border-red-400">
                      <AvatarImage src={player.avatar} alt={player.name} />
                      <AvatarFallback className="bg-red-700 text-white">
                        {player.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-white">{player.name}</p>
                      <p className="text-sm text-slate-300">{player.hero}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* VS Central */}
          <div className="text-center">
            <div className="relative">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold text-white">VS</span>
              </div>
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-yellow-300 rounded-full animate-pulse delay-75"></div>
              <div className="absolute top-1/2 -left-4 w-2 h-2 bg-yellow-200 rounded-full animate-pulse delay-150"></div>
            </div>
            <Button className="mt-6 bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700">
              Iniciar Partida
            </Button>
          </div>

          {/* Equipo Derecho */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-blue-400 mb-6">
              Team Dire
            </h2>
            {teamRight.map((player) => (
              <Card key={player.id} className="bg-blue-900/20 border-blue-500/30 hover:bg-blue-900/30 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12 border-2 border-blue-400">
                      <AvatarImage src={player.avatar} alt={player.name} />
                      <AvatarFallback className="bg-blue-700 text-white">
                        {player.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-white">{player.name}</p>
                      <p className="text-sm text-slate-300">{player.hero}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}