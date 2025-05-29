import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Bienvenido a Dota Amigos</h1>
        <p className="text-muted-foreground mt-2">
          Organiza partidas y compite con tus amigos
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Partidas Recientes</CardTitle>
            <CardDescription>
              Revisa los resultados de tus últimas partidas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              No hay partidas registradas aún
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Amigos Online</CardTitle>
            <CardDescription>
              Ve quién está disponible para jugar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Conectando...
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Estadísticas</CardTitle>
            <CardDescription>
              Tu rendimiento general
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Datos no disponibles
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}