import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Download, Share2, FileText, HelpCircle, MessageSquare, Star, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { toast } from 'sonner';

interface FAQ {
  question: string;
  answer: string;
}

interface HelpScreenProps {
  type: 'download' | 'share' | 'policies' | 'faq' | 'help' | 'rate';
  email?: string;
}

const faqItems: FAQ[] = [
  { 
    question: 'Â¿CÃ³mo agendar una cita mÃ©dica?', 
    answer: 'Puedes agendar una cita desde la secciÃ³n "Citas" en el menÃº principal. Selecciona la especialidad, el mÃ©dico y el horario disponible. RecibirÃ¡s una confirmaciÃ³n por email y SMS.' 
  },
  { 
    question: 'Â¿CÃ³mo ver mis resultados de laboratorio?', 
    answer: 'Los resultados estÃ¡n disponibles en la secciÃ³n "Resultados" del menÃº. RecibirÃ¡s una notificaciÃ³n cuando estÃ©n listos. Puedes descargarlos en PDF o compartirlos con tu mÃ©dico.' 
  },
  { 
    question: 'Â¿Puedo cancelar una cita?', 
    answer: 'SÃ­, puedes cancelar una cita hasta 24 horas antes de la hora programada desde la secciÃ³n "Mis Citas". Recuerda que cancelaciones frecuentes pueden afectar tu historial.' 
  },
  { 
    question: 'Â¿CÃ³mo actualizo mi informaciÃ³n de contacto?', 
    answer: 'Ve a "Perfil" y selecciona "Ver perfil completo" para editar tu informaciÃ³n personal. Recuerda mantener actualizado tu nÃºmero de telÃ©fono y email para recibir notificaciones importantes.' 
  },
  { 
    question: 'Â¿CÃ³mo solicito una autorizaciÃ³n de la EPS?', 
    answer: 'Las autorizaciones se gestionan automÃ¡ticamente cuando agendas una cita especializada. Puedes ver el estado en la secciÃ³n "Resultados" bajo la pestaÃ±a "Autorizaciones".' 
  },
  { 
    question: 'Â¿Es segura mi informaciÃ³n mÃ©dica?', 
    answer: 'SÃ­, toda tu informaciÃ³n estÃ¡ protegida con cifrado de extremo a extremo y cumple con las normativas colombianas (Ley 1581 de 2012) y estÃ¡ndares internacionales HIPAA.' 
  }
];

export function HelpScreen({ type, email }: HelpScreenProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [rating, setRating] = useState(0);

  const handleDownload = () => {
    toast.success('Generando historia clÃ­nica...', {
      description: `Se enviarÃ¡ un PDF cifrado a ${email} en los prÃ³ximos 5 minutos.`
    });
  };

  const handleShare = () => {
    toast.success('CÃ³digo QR generado', {
      description: 'El cÃ³digo es vÃ¡lido por 24 horas.'
    });
  };

  const handleRate = (stars: number) => {
    setRating(stars);
    toast.success(`Â¡Gracias por calificarnos con ${stars} estrellas!`, {
      description: 'Tu opiniÃ³n nos ayuda a mejorar.'
    });
  };

  return (
    <div className="bg-gray-50 overflow-x-hidden min-h-screen pb-4">
      <div className="px-5 pt-4 space-y-4">
        {/* Download */}
        {type === 'download' && (
          <>
            <Card className="bg-white border-0">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <Download className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Descargar Historia ClÃ­nica</h3>
                    <p className="text-sm text-gray-600">PDF completo de tu historial mÃ©dico</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <p className="text-sm text-gray-700">
                    Se generarÃ¡ un documento PDF completo con toda tu informaciÃ³n mÃ©dica:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2 ml-4">
                    <li>â€¢ Datos personales y de contacto</li>
                    <li>â€¢ Historial completo de citas y consultas</li>
                    <li>â€¢ Resultados de exÃ¡menes y laboratorios</li>
                    <li>â€¢ Medicamentos y tratamientos actuales</li>
                    <li>â€¢ Vacunas, alergias y condiciones crÃ³nicas</li>
                    <li>â€¢ Autorizaciones de EPS</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 mb-6">
                  <p className="text-sm text-blue-800">
                    ðŸ” El documento serÃ¡ enviado a tu email <strong>{email}</strong> y estarÃ¡ protegido con una contraseÃ±a segura que recibirÃ¡s por SMS.
                  </p>
                </div>

                <Button 
                  className="w-full rounded-2xl h-12"
                  onClick={handleDownload}
                >
                  <Download className="h-5 w-5 mr-2" />
                  Generar y Descargar
                </Button>
              </CardContent>
            </Card>
          </>
        )}

        {/* Share */}
        {type === 'share' && (
          <>
            <Card className="bg-white border-0">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                    <Share2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Compartir Perfil MÃ©dico</h3>
                    <p className="text-sm text-gray-600">CÃ³digo QR temporal</p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-4">
                  Genera un cÃ³digo QR temporal para compartir tu informaciÃ³n mÃ©dica bÃ¡sica con profesionales de la salud en caso de emergencia.
                </p>

                <div className="bg-yellow-50 rounded-2xl p-4 mb-6">
                  <p className="text-sm text-yellow-800 mb-3">
                    âš ï¸ <strong>InformaciÃ³n compartida:</strong>
                  </p>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>â€¢ Nombre completo y documento</li>
                    <li>â€¢ Tipo de sangre</li>
                    <li>â€¢ Alergias registradas</li>
                    <li>â€¢ Condiciones crÃ³nicas</li>
                    <li>â€¢ Medicamentos actuales</li>
                    <li>â€¢ Contacto de emergencia</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 bg-gray-100 rounded-2xl flex items-center justify-center mb-3">
                      <Share2 className="h-16 w-16 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600">Presiona el botÃ³n para generar</p>
                  </div>
                </div>

                <Button 
                  className="w-full rounded-2xl h-12"
                  onClick={handleShare}
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  Generar CÃ³digo QR
                </Button>

                <p className="text-xs text-center text-gray-500 mt-3">
                  El cÃ³digo tendrÃ¡ validez de 24 horas
                </p>
              </CardContent>
            </Card>
          </>
        )}

        {/* Policies */}
        {type === 'policies' && (
          <>
            <Card className="bg-white border-0">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                    <FileText className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">PolÃ­ticas de Privacidad</h3>
                    <p className="text-sm text-gray-600">ProtecciÃ³n de datos personales</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-gray-700">
                  <section className="bg-gray-50 rounded-2xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">1. RecopilaciÃ³n de Datos</h4>
                    <p>Integra IPS recopila informaciÃ³n personal y mÃ©dica necesaria para brindar servicios de salud de calidad, incluyendo datos de identificaciÃ³n, contacto, historial mÃ©dico y tratamientos.</p>
                  </section>

                  <section className="bg-gray-50 rounded-2xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">2. Uso de la InformaciÃ³n</h4>
                    <p>Utilizamos tu informaciÃ³n exclusivamente para prestaciÃ³n de servicios mÃ©dicos, seguimiento de tratamientos, comunicaciÃ³n relacionada con tu salud y mejora continua de nuestros servicios.</p>
                  </section>

                  <section className="bg-gray-50 rounded-2xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">3. ProtecciÃ³n de Datos</h4>
                    <p>Implementamos medidas de seguridad tÃ©cnicas y organizativas robustas para proteger tus datos personales, incluyendo cifrado de extremo a extremo, autenticaciÃ³n multifactor y auditorÃ­as regulares.</p>
                  </section>

                  <section className="bg-gray-50 rounded-2xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">4. Tus Derechos</h4>
                    <p>Tienes derecho a acceder, rectificar, cancelar y oponerte al tratamiento de tus datos personales. Puedes ejercer estos derechos contactando a nuestro equipo de protecciÃ³n de datos.</p>
                  </section>

                  <section className="bg-gray-50 rounded-2xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">5. Cumplimiento Normativo</h4>
                    <p>Cumplimos estrictamente con la Ley 1581 de 2012 de Colombia sobre protecciÃ³n de datos personales y estÃ¡ndares internacionales como HIPAA y GDPR.</p>
                  </section>

                  <section className="bg-gray-50 rounded-2xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">6. Compartir InformaciÃ³n</h4>
                    <p>Solo compartimos tu informaciÃ³n con profesionales de la salud autorizados, entidades de salud relacionadas (EPS, laboratorios) y cuando sea requerido por ley.</p>
                  </section>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 mt-4">
                  <p className="text-sm text-blue-800">
                    <strong>Ãšltima actualizaciÃ³n:</strong> Enero 2025
                  </p>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* FAQ */}
        {type === 'faq' && (
          <>
            <Card className="bg-white border-0">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <HelpCircle className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Preguntas Frecuentes</h3>
                    <p className="text-sm text-gray-600">Encuentra respuestas rÃ¡pidas</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {faqItems.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
                      <button
                        className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                        onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      >
                        <h4 className="font-semibold text-gray-900 pr-2">{item.question}</h4>
                        {expandedFAQ === index ? (
                          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      {expandedFAQ === index && (
                        <div className="px-4 pb-4">
                          <p className="text-sm text-gray-700 leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-0">
              <CardContent className="p-5">
                <p className="text-sm text-blue-800">
                  Â¿No encuentras la respuesta que buscas? Contacta con nuestro <strong>Centro de Ayuda</strong> para asistencia personalizada.
                </p>
              </CardContent>
            </Card>
          </>
        )}

        {/* Help Center */}
        {type === 'help' && (
          <>
            <Card className="bg-white border-0">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Centro de Ayuda</h3>
                    <p className="text-sm text-gray-600">Contacta con soporte</p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-6">
                  Nuestro equipo de soporte estÃ¡ disponible para ayudarte con cualquier pregunta o problema:
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-600">LÃ­nea telefÃ³nica</p>
                      <p className="font-semibold text-gray-900">+57 (1) 234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-2xl">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-600">WhatsApp</p>
                      <p className="font-semibold text-gray-900">+57 300 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-2xl">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-600">Correo electrÃ³nico</p>
                      <p className="font-semibold text-gray-900">soporte@integraips.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Horario de atenciÃ³n:</strong>
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>â€¢ Lunes a Viernes: 8:00 AM - 6:00 PM</li>
                    <li>â€¢ SÃ¡bados: 8:00 AM - 12:00 PM</li>
                    <li>â€¢ Domingos y festivos: Cerrado</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-3">
                    *Para emergencias mÃ©dicas, dirÃ­gete al servicio de urgencias mÃ¡s cercano o llama al 123
                  </p>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Rate */}
        {type === 'rate' && (
          <>
            <Card className="bg-white border-0">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Califica la App</h3>
                    <p className="text-sm text-gray-600">Comparte tu experiencia</p>
                  </div>
                </div>

                <p className="text-center text-gray-700 mb-6">
                  Â¿CÃ³mo ha sido tu experiencia con Integra IPS?
                </p>

                <div className="flex justify-center gap-2 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className="w-14 h-14 flex items-center justify-center hover:scale-110 transition-transform rounded-full hover:bg-yellow-50"
                      onClick={() => handleRate(star)}
                    >
                      <Star 
                        className={`h-12 w-12 ${
                          rating >= star 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    </button>
                  ))}
                </div>

                {rating > 0 && (
                  <div className="bg-green-50 rounded-2xl p-4 mb-4">
                    <p className="text-sm text-green-800 text-center">
                      âœ¨ Â¡Gracias por tu calificaciÃ³n de {rating} estrellas!
                    </p>
                  </div>
                )}

                <div className="bg-blue-50 rounded-2xl p-4">
                  <p className="text-sm text-blue-800 text-center">
                    ðŸ’¡ Tu opiniÃ³n nos ayuda a mejorar continuamente nuestros servicios y atenciÃ³n
                  </p>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}

