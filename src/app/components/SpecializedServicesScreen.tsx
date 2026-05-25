import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Ear, 
  Stethoscope, 
  Volume2, 
  MessageSquare, 
  Activity, 
  Headphones,
  ChevronRight,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import { motion } from 'motion/react';
import { EmptyState } from './EmptyState';
import { LoadingSpinner } from './LoadingSpinner';

export interface SpecializedService {
  id: string;
  title: string;
  description: string;
  icon: 'ear' | 'stethoscope' | 'volume' | 'message' | 'activity' | 'headphones';
  category: string;
  detailedDescription: string;
  whenToConsult: string[];
  whatIncludes: string[];
  professionals: {
    name: string;
    availability: string;
  }[];
}

interface SpecializedServicesScreenProps {
  onServiceClick: (service: SpecializedService) => void;
  onBackToHome?: () => void;
}

export const SpecializedServicesScreen: React.FC<SpecializedServicesScreenProps> = ({
  onServiceClick,
  onBackToHome
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Mock data - 6 servicios especializados
  const services: SpecializedService[] = [
    {
      id: '1',
      title: 'OtorrinolaringologÃ­a',
      description: 'Diagnóstico, tratamiento y seguimiento integral de las enfermedades de oÃ­do, nariz y garganta.',
      icon: 'ear',
      category: 'Especialidad MÃ©dica',
      detailedDescription: 'La otorrinolaringologÃ­a es la especialidad mÃ©dica que se encarga del Diagnóstico, tratamiento y seguimiento integral de las enfermedades de oÃ­do, nariz, garganta y estructuras relacionadas de cabeza y cuello. Nuestros especialistas cuentan con equipamiento de Ãºltima generaciÃ³n para brindarte la mejor atenciÃ³n.',
      whenToConsult: [
        'Dolor de oÃ­do persistente o infecciones recurrentes',
        'Pérdida de audiciÃ³n o zumbidos en los oÃ­dos',
        'CongestiÃ³n nasal crÃ³nica o sinusitis',
        'Dolor de garganta frecuente o dificultad para tragar',
        'Ronquidos o apnea del sueÃ±o',
        'Problemas de voz o disfonÃ­a'
      ],
      whatIncludes: [
        'Consulta especializada con otorrinolaringÃ³logo',
        'Otoscopia y examen fÃ­sico completo',
        'ValoraciÃ³n de oÃ­do, nariz y garganta',
        'Diagnóstico y plan de tratamiento personalizado',
        'Seguimiento post-tratamiento'
      ],
      professionals: [
        { name: 'Dr. Carlos Mendoza', availability: 'PrÃ³xima disponibilidad: Lun 15:00' },
        { name: 'Dra. Ana Ruiz', availability: 'PrÃ³xima disponibilidad: Mar 10:30' },
        { name: 'Dr. Miguel Torres', availability: 'PrÃ³xima disponibilidad: MiÃ© 14:00' }
      ]
    },
    {
      id: '2',
      title: 'OtologÃ­a',
      description: 'Tratamiento mÃ©dico y quirÃºrgico de las enfermedades del oÃ­do y estructuras relacionadas.',
      icon: 'stethoscope',
      category: 'Subespecialidad',
      detailedDescription: 'La otologÃ­a es la subespecialidad enfocada en el Diagnóstico y tratamiento mÃ©dico y quirÃºrgico de las enfermedades del oÃ­do y estructuras relacionadas. Tratamos desde infecciones simples hasta condiciones complejas que requieren cirugÃ­a especializada.',
      whenToConsult: [
        'Pérdida auditiva sÃºbita o progresiva',
        'Infecciones de oÃ­do recurrentes',
        'SecreciÃ³n del oÃ­do o sangrado',
        'Dolor intenso en el oÃ­do',
        'SensaciÃ³n de oÃ­do tapado persistente',
        'Necesidad de Evaluación pre-quirÃºrgica del oÃ­do'
      ],
      whatIncludes: [
        'ValoraciÃ³n otolÃ³gica especializada',
        'MicroscopÃ­a del oÃ­do',
        'Evaluación de funciÃ³n auditiva',
        'Diagnóstico de patologÃ­as del oÃ­do medio e interno',
        'Plan de manejo mÃ©dico o quirÃºrgico'
      ],
      professionals: [
        { name: 'Dr. Roberto Silva', availability: 'PrÃ³xima disponibilidad: Lun 11:00' },
        { name: 'Dra. Patricia LÃ³pez', availability: 'PrÃ³xima disponibilidad: Jue 16:00' }
      ]
    },
    {
      id: '3',
      title: 'AudiologÃ­a',
      description: 'Diagnóstico, tratamiento y rehabilitaciÃ³n de los trastornos auditivos y del equilibrio.',
      icon: 'volume',
      category: 'Ciencias de la Salud',
      detailedDescription: 'La audiologÃ­a es la disciplina de las ciencias de la salud que se dedica al estudio, Diagnóstico, tratamiento y rehabilitaciÃ³n de los trastornos auditivos y del equilibrio. Contamos con tecnologÃ­a de punta para realizar estudios audiolÃ³gicos completos.',
      whenToConsult: [
        'Dificultad para escuchar conversaciones',
        'Necesidad de subir el volumen constantemente',
        'Pérdida de equilibrio o mareos frecuentes',
        'Evaluación auditiva preventiva',
        'Seguimiento de tratamientos auditivos',
        'ValoraciÃ³n para adaptación de audífonos'
      ],
      whatIncludes: [
        'AudiometrÃ­a tonal y vocal',
        'ImpedanciometrÃ­a',
        'Otoemisiones acÃºsticas',
        'Potenciales evocados auditivos',
        'Evaluación vestibular',
        'Informe audiolÃ³gico completo'
      ],
      professionals: [
        { name: 'Lic. Laura MartÃ­nez', availability: 'PrÃ³xima disponibilidad: Lun 09:00' },
        { name: 'Lic. Juan PÃ©rez', availability: 'PrÃ³xima disponibilidad: Mar 14:30' },
        { name: 'Lic. Diana Castro', availability: 'PrÃ³xima disponibilidad: Vie 10:00' }
      ]
    },
    {
      id: '4',
      title: 'FonoaudiologÃ­a',
      description: 'Evaluación, Diagnóstico y rehabilitaciÃ³n de trastornos de comunicaciÃ³n, voz, habla, lenguaje y degluciÃ³n.',
      icon: 'message',
      category: 'RehabilitaciÃ³n',
      detailedDescription: 'La fonoaudiologÃ­a se especializa en la Evaluación, Diagnóstico y rehabilitaciÃ³n de trastornos de la comunicaciÃ³n, voz, habla, lenguaje y degluciÃ³n. Ofrecemos programas de rehabilitaciÃ³n personalizados para pacientes de todas las edades.',
      whenToConsult: [
        'Dificultades en el habla o pronunciaciÃ³n',
        'Problemas de voz (disfonÃ­a o ronquera)',
        'Retraso en el desarrollo del lenguaje en niÃ±os',
        'Dificultad para tragar alimentos o lÃ­quidos',
        'Tartamudez o disfluencia',
        'RehabilitaciÃ³n post-cirugÃ­a de cabeza y cuello'
      ],
      whatIncludes: [
        'Evaluación fonoaudiolÃ³gica completa',
        'ValoraciÃ³n de habla y lenguaje',
        'Evaluación de la degluciÃ³n',
        'AnÃ¡lisis de la voz',
        'Plan de terapia personalizado',
        'Seguimiento y rehabilitaciÃ³n'
      ],
      professionals: [
        { name: 'Fga. MarÃ­a Torres', availability: 'PrÃ³xima disponibilidad: Lun 08:00' },
        { name: 'Fgo. AndrÃ©s GÃ³mez', availability: 'PrÃ³xima disponibilidad: MiÃ© 11:00' },
        { name: 'Fga. Carolina Reyes', availability: 'PrÃ³xima disponibilidad: Jue 15:30' }
      ]
    },
    {
      id: '5',
      title: 'VÃ©rtigo y Tinnitus',
      description: 'Manejo integral del mareo, la inestabilidad y el zumbido de oÃ­dos.',
      icon: 'activity',
      category: 'Programa Especializado',
      detailedDescription: 'Nuestro programa especializado en vÃ©rtigo y tinnitus ofrece un manejo integral y multidisciplinario del mareo, la inestabilidad y el zumbido de oÃ­dos. Contamos con estudios especializados y protocolos de tratamiento basados en evidencia cientÃ­fica.',
      whenToConsult: [
        'SensaciÃ³n de giro o movimiento (vÃ©rtigo)',
        'Mareos o inestabilidad al caminar',
        'Zumbido constante en los oÃ­dos (tinnitus)',
        'NÃ¡useas o vÃ³mito asociado a mareos',
        'CaÃ­das frecuentes o Pérdida de equilibrio',
        'Dificultad para concentrarse por el zumbido'
      ],
      whatIncludes: [
        'ValoraciÃ³n mÃ©dica especializada',
        'Estudios vestibulares avanzados',
        'Evaluación audiolÃ³gica',
        'Pruebas de equilibrio y coordinaciÃ³n',
        'Plan de manejo personalizado',
        'Terapia de rehabilitaciÃ³n vestibular'
      ],
      professionals: [
        { name: 'Dr. Fernando Rojas', availability: 'PrÃ³xima disponibilidad: Mar 09:30' },
        { name: 'Dra. Isabel Vargas', availability: 'PrÃ³xima disponibilidad: Jue 13:00' }
      ]
    },
    {
      id: '6',
      title: 'Centro Audiológico Avanzado',
      description: 'Diagnóstico, adaptación y soluciones auditivas (audífonos e implantables).',
      icon: 'headphones',
      category: 'Centro Especializado',
      detailedDescription: 'Nuestro Centro Audiológico Avanzado ofrece servicios integrales de diagnóstico audiológico, adaptación de audífonos de última generación y asesoría en dispositivos implantables. Trabajamos con las mejores marcas y tecnologías del mercado.',
      whenToConsult: [
        'Pérdida auditiva que afecta tu vida diaria',
        'Necesidad de audífonos o reemplazo de los actuales',
        'Evaluación para implantes cocleares',
        'Dificultad para escuchar en ambientes ruidosos',
        'Prueba y adaptación de nuevas tecnologías auditivas',
        'Seguimiento y ajuste de audífonos'
      ],
      whatIncludes: [
        'Evaluación audiolÃ³gica completa',
        'AsesorÃ­a personalizada en soluciones auditivas',
        'Prueba de audífonos de Ãºltima tecnologÃ­a',
        'adaptación y programaciÃ³n de audífonos',
        'Moldes auditivos personalizados',
        'Seguimiento y ajustes ilimitados'
      ],
      professionals: [
        { name: 'Lic. Santiago Moreno', availability: 'PrÃ³xima disponibilidad: Lun 10:00' },
        { name: 'Lic. Valentina Cruz', availability: 'PrÃ³xima disponibilidad: MiÃ© 15:00' },
        { name: 'Dr. Eduardo RamÃ­rez', availability: 'PrÃ³xima disponibilidad: Vie 11:30' }
      ]
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ear':
        return <Ear className="h-6 w-6 text-blue-500" />;
      case 'stethoscope':
        return <Stethoscope className="h-6 w-6 text-blue-500" />;
      case 'volume':
        return <Volume2 className="h-6 w-6 text-blue-500" />;
      case 'message':
        return <MessageSquare className="h-6 w-6 text-blue-500" />;
      case 'activity':
        return <Activity className="h-6 w-6 text-blue-500" />;
      case 'headphones':
        return <Headphones className="h-6 w-6 text-blue-500" />;
      default:
        return <Stethoscope className="h-6 w-6 text-blue-500" />;
    }
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoading(true);
    // Simulate reload
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="p-4 overflow-x-hidden">
        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-4 animate-pulse">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                  </div>
                  <div className="w-6 h-6 bg-gray-200 rounded"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (hasError) {
    return (
      <div className="p-4 overflow-x-hidden">
        <Card className="bg-red-50 border-red-200 shadow-sm">
          <CardContent className="p-6 text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-gray-900 mb-2">No pudimos cargar los servicios</h3>
            <p className="text-sm text-gray-600 mb-4">
              Ha ocurrido un error al cargar la informaciÃ³n. Por favor, intenta nuevamente.
            </p>
            <Button onClick={handleRetry} className="bg-blue-500 hover:bg-blue-600">
              <RefreshCw className="h-4 w-4 mr-2" />
              Reintentar
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Empty state
  if (services.length === 0) {
    return (
      <div className="p-4 overflow-x-hidden">
        <EmptyState
          icon={Stethoscope}
          title="AÃºn no hay servicios disponibles"
          description="Estamos trabajando para ofrecerte los mejores servicios especializados."
          actionLabel="Ir a Inicio"
          onAction={onBackToHome}
        />
      </div>
    );
  }

  // Main content
  return (
    <div className="p-5 space-y-4 overflow-x-hidden">
      {/* Header Info */}
      <div className="bg-blue-50 rounded-3xl p-5" style={{ border: '1px solid rgba(59, 130, 246, 0.2)' }}>
        <p className="text-sm text-blue-800 leading-relaxed">
          Conoce nuestros servicios especializados de otorrinolaringologÃ­a y audiologÃ­a. 
          Contamos con profesionales expertos y tecnologÃ­a de Ãºltima generaciÃ³n.
        </p>
      </div>

      {/* Services List */}
      <Card className="bg-white border-0">
        <CardContent className="p-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onServiceClick(service)}
              className="flex items-center gap-4 p-5 cursor-pointer hover:bg-gray-50 active:bg-gray-100 transition-all min-h-[80px] first:rounded-t-3xl last:rounded-b-3xl"
              style={{ borderBottom: index < services.length - 1 ? '1px solid rgba(0, 0, 0, 0.08)' : 'none' }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                {getIcon(service.icon)}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-gray-900 font-semibold leading-snug mb-1">{service.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2 leading-snug mb-2">
                  {service.description}
                </p>
                <Badge className="bg-blue-100 text-blue-700 text-xs px-2.5 py-0.5 rounded-full font-medium">
                  {service.category}
                </Badge>
              </div>

              {/* Chevron */}
              <ChevronRight className="h-6 w-6 text-gray-400 flex-shrink-0" />
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Contact Info */}
      <Card className="bg-gray-50 border-0">
        <CardContent>
          <h3 className="text-gray-900 font-semibold mb-2">Â¿Necesitas ayuda?</h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Nuestro equipo estÃ¡ disponible para asesorarte en la elecciÃ³n del servicio adecuado.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold">TelÃ©fono:</span>
              <span>+57 (1) 234 5678</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold">WhatsApp:</span>
              <span>+57 300 123 4567</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold">Email:</span>
              <span>servicios@integraips.com</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
