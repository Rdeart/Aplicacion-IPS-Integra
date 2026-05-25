import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Heart, AlertCircle, Activity, Pill, Syringe, TrendingUp } from 'lucide-react';

interface Medication {
  name: string;
  frequency: string;
  time: string;
  prescribedBy: string;
}

interface Vaccination {
  name: string;
  date: string;
  place: string;
}

interface VitalSigns {
  weight: string;
  height: string;
  bmi: string;
  bloodPressure: string;
  heartRate: string;
  temperature: string;
  lastUpdated: string;
}

interface MedicalInfoScreenProps {
  type: 'blood' | 'allergies' | 'conditions' | 'medications' | 'vaccinations' | 'vitals';
  bloodType?: string;
  allergies?: string[];
  chronicConditions?: string[];
  currentMedications?: Medication[];
  vaccinations?: Vaccination[];
  vitalSigns?: VitalSigns;
}

export function MedicalInfoScreen({ 
  type, 
  bloodType, 
  allergies, 
  chronicConditions, 
  currentMedications,
  vaccinations,
  vitalSigns
}: MedicalInfoScreenProps) {
  return (
    <div className="bg-gray-50 overflow-x-hidden min-h-screen pb-4">
      <div className="px-5 pt-4 space-y-4">
        {/* Blood Type */}
        {type === 'blood' && bloodType && (
          <>
            <Card className="bg-white border-0">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-5xl font-bold text-red-600">{bloodType}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tu Tipo de Sangre</h3>
                <p className="text-sm text-gray-600">
                  Es importante mantener esta informaciÃ³n actualizada para emergencias mÃ©dicas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-0">
              <CardContent className="p-5">
                <h4 className="font-semibold text-blue-900 mb-3">ðŸ’¡ InformaciÃ³n Importante</h4>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li>â€¢ Lleva siempre contigo tu tipo de sangre</li>
                  <li>â€¢ Comparte esta informaciÃ³n con tu contacto de emergencia</li>
                  <li>â€¢ Verifica tu tipo de sangre periÃ³dicamente</li>
                </ul>
              </CardContent>
            </Card>
          </>
        )}

        {/* Allergies */}
        {type === 'allergies' && allergies && (
          <>
            <Card className="bg-white border-0">
              <CardContent className="p-5">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-orange-500" />
                  Alergias Registradas
                </h3>
                <div className="space-y-3">
                  {allergies.map((allergy, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-orange-50 rounded-2xl">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-orange-600" />
                      </div>
                      <span className="font-semibold text-gray-900">{allergy}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-0">
              <CardContent className="p-5">
                <h4 className="font-semibold text-orange-900 mb-3">âš ï¸ Advertencia</h4>
                <p className="text-sm text-orange-800">
                  Siempre informa a tu mÃ©dico y personal de salud sobre tus alergias antes de cualquier tratamiento, procedimiento o prescripciÃ³n de medicamentos.
                </p>
              </CardContent>
            </Card>
          </>
        )}

        {/* Chronic Conditions */}
        {type === 'conditions' && chronicConditions && (
          <>
            <Card className="bg-white border-0">
              <CardContent className="p-5">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Activity className="h-6 w-6 text-purple-500" />
                  Condiciones CrÃ³nicas
                </h3>
                <div className="space-y-3">
                  {chronicConditions.map((condition, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-purple-50 rounded-2xl">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Activity className="h-5 w-5 text-purple-600" />
                      </div>
                      <span className="font-semibold text-gray-900">{condition}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-0">
              <CardContent className="p-5">
                <h4 className="font-semibold text-blue-900 mb-3">ðŸ’¡ Recomendaciones</h4>
                <ul className="text-sm text-blue-800 space-y-2">
                  <li>â€¢ MantÃ©n tus controles mÃ©dicos al dÃ­a</li>
                  <li>â€¢ Sigue las indicaciones de tu mÃ©dico tratante</li>
                  <li>â€¢ Reporta cualquier cambio en tu condiciÃ³n</li>
                </ul>
              </CardContent>
            </Card>
          </>
        )}

        {/* Medications */}
        {type === 'medications' && currentMedications && (
          <>
            <Card className="bg-white border-0">
              <CardContent className="p-5">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Pill className="h-6 w-6 text-blue-500" />
                  Medicamentos Actuales
                </h3>
                <div className="space-y-3">
                  {currentMedications.map((med, index) => (
                    <div key={index} className="p-4 bg-blue-50 rounded-2xl space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900 text-lg">{med.name}</h4>
                        <Badge className="bg-green-100 text-green-700 border-0 font-semibold">
                          Activo
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-gray-600 mb-1">Frecuencia</p>
                          <p className="font-semibold text-gray-900">{med.frequency}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">Horario</p>
                          <p className="font-semibold text-gray-900">{med.time}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm mb-1">Recetado por</p>
                        <p className="font-semibold text-gray-900">{med.prescribedBy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-0">
              <CardContent className="p-5">
                <h4 className="font-semibold text-purple-900 mb-3">ðŸ’Š Recordatorios</h4>
                <p className="text-sm text-purple-800 mb-2">
                  No olvides tomar tus medicamentos segÃºn las indicaciones. Configura recordatorios para no saltarte ninguna dosis.
                </p>
              </CardContent>
            </Card>
          </>
        )}

        {/* Vaccinations */}
        {type === 'vaccinations' && vaccinations && (
          <>
            <Card className="bg-white border-0">
              <CardContent className="p-5">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Syringe className="h-6 w-6 text-green-500" />
                  Historial de Vacunas
                </h3>
                <div className="space-y-3">
                  {vaccinations.map((vaccine, index) => (
                    <div key={index} className="p-4 bg-green-50 rounded-2xl">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Syringe className="h-5 w-5 text-green-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900">{vaccine.name}</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-gray-600 mb-1">Fecha de AplicaciÃ³n</p>
                          <p className="font-semibold text-gray-900">{vaccine.date}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 mb-1">Lugar</p>
                          <p className="font-semibold text-gray-900">{vaccine.place}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-0">
              <CardContent className="p-5">
                <h4 className="font-semibold text-green-900 mb-3">ðŸ›¡ï¸ ProtecciÃ³n</h4>
                <p className="text-sm text-green-800">
                  MantÃ©n tu esquema de vacunaciÃ³n completo y actualizado para proteger tu salud y la de los demÃ¡s.
                </p>
              </CardContent>
            </Card>
          </>
        )}

        {/* Vital Signs */}
        {type === 'vitals' && vitalSigns && (
          <>
            <Card className="bg-white border-0">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-pink-500" />
                    Signos Vitales
                  </h3>
                  <p className="text-xs text-gray-600">Ãšltima actualizaciÃ³n: {vitalSigns.lastUpdated}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-pink-50 rounded-2xl text-center">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Activity className="h-6 w-6 text-pink-600" />
                    </div>
                    <p className="text-xs text-gray-600 mb-1">Peso</p>
                    <p className="text-xl font-bold text-gray-900">{vitalSigns.weight}</p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-2xl text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600 mb-1">Altura</p>
                    <p className="text-xl font-bold text-gray-900">{vitalSigns.height}</p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-2xl text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Activity className="h-6 w-6 text-purple-600" />
                    </div>
                    <p className="text-xs text-gray-600 mb-1">IMC</p>
                    <p className="text-xl font-bold text-gray-900">{vitalSigns.bmi}</p>
                  </div>

                  <div className="p-4 bg-red-50 rounded-2xl text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Heart className="h-6 w-6 text-red-600" />
                    </div>
                    <p className="text-xs text-gray-600 mb-1">PresiÃ³n</p>
                    <p className="text-lg font-bold text-gray-900">{vitalSigns.bloodPressure}</p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-2xl text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Heart className="h-6 w-6 text-green-600" />
                    </div>
                    <p className="text-xs text-gray-600 mb-1">Frecuencia CardÃ­aca</p>
                    <p className="text-xl font-bold text-gray-900">{vitalSigns.heartRate}</p>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-2xl text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Activity className="h-6 w-6 text-orange-600" />
                    </div>
                    <p className="text-xs text-gray-600 mb-1">Temperatura</p>
                    <p className="text-xl font-bold text-gray-900">{vitalSigns.temperature}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-0">
              <CardContent className="p-5">
                <h4 className="font-semibold text-blue-900 mb-3">ðŸ“Š Monitoreo</h4>
                <p className="text-sm text-blue-800">
                  MantÃ©n un registro regular de tus signos vitales para detectar cambios importantes en tu salud.
                </p>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}

