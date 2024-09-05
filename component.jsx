/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fmKUxSbtGOM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <Link href="#" prefetch={false}>
            <img
              src="/placeholder.svg"
              alt="Toyota"
              width={150}
              height={50}
              className="h-8"
              style={{ aspectRatio: "150/50", objectFit: "cover" }}
            />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors" prefetch={false}>
              Inicio
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors" prefetch={false}>
              Modelos
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors" prefetch={false}>
              Financiamiento
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors" prefetch={false}>
              Contacto
            </Link>
          </nav>
          <Button className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-[url('/banner.jpg')] bg-cover bg-center py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-white mb-4">Descubre los nuevos modelos Toyota</h1>
            <p className="text-lg text-white mb-8">
              Conoce los últimos lanzamientos de Toyota y encuentra el auto perfecto para ti.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
              prefetch={false}
            >
              Ver modelos
            </Link>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Nuestros modelos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Toyota Corolla"
                  width={400}
                  height={300}
                  className="rounded-t-md"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Toyota Corolla</h3>
                  <p className="text-gray-700 mb-4">
                    El Corolla es un sedán compacto con un diseño elegante y eficiencia de combustible.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
                    prefetch={false}
                  >
                    Ver detalles
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Toyota RAV4"
                  width={400}
                  height={300}
                  className="rounded-t-md"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Toyota RAV4</h3>
                  <p className="text-gray-700 mb-4">
                    El RAV4 es un SUV compacto con un diseño robusto y capacidad off-road.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
                    prefetch={false}
                  >
                    Ver detalles
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Toyota Camry"
                  width={400}
                  height={300}
                  className="rounded-t-md"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Toyota Camry</h3>
                  <p className="text-gray-700 mb-4">
                    El Camry es un sedán de tamaño medio con un diseño elegante y un interior espacioso.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
                    prefetch={false}
                  >
                    Ver detalles
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Toyota Highlander"
                  width={400}
                  height={300}
                  className="rounded-t-md"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Toyota Highlander</h3>
                  <p className="text-gray-700 mb-4">
                    El Highlander es un SUV de 3 filas de asientos con espacio y versatilidad.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
                    prefetch={false}
                  >
                    Ver detalles
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Promociones</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Promoción 1"
                  width={400}
                  height={300}
                  className="rounded-t-md"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Promoción 1</h3>
                  <p className="text-gray-700 mb-4">Aprovecha esta promoción especial en el Toyota Corolla.</p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
                    prefetch={false}
                  >
                    Ver detalles
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Promoción 2"
                  width={400}
                  height={300}
                  className="rounded-t-md"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Promoción 2</h3>
                  <p className="text-gray-700 mb-4">Descubre la oferta especial en el Toyota RAV4.</p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
                    prefetch={false}
                  >
                    Ver detalles
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Promoción 3"
                  width={400}
                  height={300}
                  className="rounded-t-md"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Promoción 3</h3>
                  <p className="text-gray-700 mb-4">Aprovecha esta oportunidad en el Toyota Camry.</p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
                    prefetch={false}
                  >
                    Ver detalles
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Contacto</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" type="text" placeholder="Ingresa tu nombre" />
              </div>
              <div className="mb-4">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" placeholder="Ingresa tu correo electrónico" />
              </div>
              <div className="mb-4">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" rows={5} placeholder="Escribe tu mensaje" />
              </div>
              <Button type="submit">Enviar</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Acerca de Toyota</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors" prefetch={false}>
                    Nuestra historia
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors" prefetch={false}>
                    Sostenibilidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors" prefetch={false}>
                    Trabaja con nosotros
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Modelos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors" prefetch={false}>
                    Toyota Corolla
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors" prefetch={false}>
                    Toyota RAV4
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors" prefetch={false}>
                    Toyota Camry
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors" prefetch={false}>
                    Toyota Highlander
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors" prefetch={false}>
                    Financiamiento
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors" prefetch={false}>
                    Mantenimiento
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors" prefetch={false}>
                    Accesorios
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors" prefetch={false}>
                    Envía un mensaje
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors" prefetch={false}>
                    Encuentra una sucursal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors" prefetch={false}>
                    Preguntas frecuentes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400">&copy; 2024 Toyota. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}