import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Lock, Shield, Smartphone, Eye, Check, X, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface Device {
  name: string;
  lastActive: string;
  location: string;
  current: boolean;
}

interface SecurityScreenProps {
  type: 'password' | '2fa' | 'devices' | 'privacy';
  devices?: Device[];
}

export function SecurityScreen({ type, devices }: SecurityScreenProps) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error('Por favor completa todos los campos');
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error('Las contraseÃ±as no coinciden');
      return;
    }
    if (newPassword.length < 8) {
      toast.error('La contraseÃ±a debe tener al menos 8 caracteres');
      return;
    }
    toast.success('ContraseÃ±a actualizada exitosamente');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleEnable2FA = () => {
    toast.success('ConfiguraciÃ³n de 2FA iniciada', {
      description: 'RecibirÃ¡s un SMS con instrucciones en los prÃ³ximos minutos.'
    });
  };

  const handleRemoveDevice = (deviceName: string) => {
    toast.success(`Dispositivo ${deviceName} removido`);
  };

  return (
    <div className="bg-gray-50 overflow-x-hidden min-h-screen pb-4">
      <div className="px-5 pt-4 space-y-4">
        {/* Change Password */}
        {type === 'password' && (
          <>
            <Card className="bg-white border-0">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Lock className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Cambiar ContraseÃ±a</h3>
                    <p className="text-sm text-gray-600">Actualiza tu contraseÃ±a de acceso</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700">ContraseÃ±a Actual</Label>
                    <Input 
                      type="password" 
                      placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" 
                      className="rounded-2xl mt-1"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Nueva ContraseÃ±a</Label>
                    <Input 
                      type="password" 
                      placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" 
                      className="rounded-2xl mt-1"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700">Confirmar Nueva ContraseÃ±a</Label>
                    <Input 
                      type="password" 
                      placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" 
                      className="rounded-2xl mt-1"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-0">
              <CardContent className="p-5">
                <h4 className="font-semibold text-blue-900 mb-3">ðŸ’¡ Requisitos de ContraseÃ±a</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>â€¢ MÃ­nimo 8 caracteres</li>
                  <li>â€¢ Al menos una letra mayÃºscula</li>
                  <li>â€¢ Al menos una letra minÃºscula</li>
                  <li>â€¢ Al menos un nÃºmero</li>
                  <li>â€¢ Se recomienda incluir caracteres especiales</li>
                </ul>
              </CardContent>
            </Card>

            <Button 
              className="w-full rounded-2xl h-12"
              onClick={handleChangePassword}
            >
              <Lock className="h-5 w-5 mr-2" />
              Cambiar ContraseÃ±a
            </Button>
          </>
        )}

        {/* 2FA */}
        {type === '2fa' && (
          <>
            <Card className="bg-white border-0">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AutenticaciÃ³n de Dos Factores</h3>
                    <p className="text-sm text-gray-600">AÃ±ade seguridad extra a tu cuenta</p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-2xl p-4 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <p className="font-semibold text-green-800">Beneficios de 2FA</p>
                  </div>
                  <ul className="text-sm text-green-700 space-y-2 ml-8">
                    <li>â€¢ ProtecciÃ³n contra accesos no autorizados</li>
                    <li>â€¢ VerificaciÃ³n adicional en cada inicio de sesiÃ³n</li>
                    <li>â€¢ Mayor seguridad para tus datos mÃ©dicos</li>
                    <li>â€¢ Notificaciones de intentos de acceso</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Â¿CÃ³mo funciona?</h4>
                  <p className="text-sm text-blue-800">
                    DespuÃ©s de activar 2FA, necesitarÃ¡s ingresar un cÃ³digo de verificaciÃ³n que te enviaremos por SMS cada vez que inicies sesiÃ³n desde un nuevo dispositivo.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Button 
              className="w-full rounded-2xl h-12"
              onClick={handleEnable2FA}
            >
              <Shield className="h-5 w-5 mr-2" />
              Activar AutenticaciÃ³n 2FA
            </Button>

            <Button 
              variant="outline" 
              className="w-full rounded-2xl h-12"
            >
              MÃ¡s Tarde
            </Button>
          </>
        )}

        {/* Devices */}
        {type === 'devices' && devices && (
          <>
            <Card className="bg-white border-0">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Dispositivos Conectados</h3>
                    <p className="text-sm text-gray-600">Gestiona tus dispositivos con acceso</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {devices.map((device, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-2xl ${device.current ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'}`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Smartphone className="h-5 w-5 text-gray-700" />
                            <h4 className="font-semibold text-gray-900">{device.name}</h4>
                            {device.current && (
                              <Badge className="bg-blue-600 text-white border-0 text-xs ml-2">
                                Este Dispositivo
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-600">Ãšltima actividad: {device.lastActive}</p>
                          <p className="text-xs text-gray-600">{device.location}</p>
                        </div>
                        {!device.current && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50 ml-2"
                            onClick={() => handleRemoveDevice(device.name)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-0">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">Seguridad</h4>
                    <p className="text-sm text-orange-800">
                      Si ves algÃºn dispositivo que no reconoces, elimÃ­nalo inmediatamente y cambia tu contraseÃ±a.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Privacy */}
        {type === 'privacy' && (
          <>
            <Card className="bg-white border-0">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                    <Eye className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Privacidad de Datos</h3>
                    <p className="text-sm text-gray-600">CÃ³mo protegemos tu informaciÃ³n</p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-2xl p-4 mb-4">
                  <p className="font-semibold text-green-800 mb-3">ðŸ”’ Tu privacidad estÃ¡ protegida</p>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>â€¢ Cifrado de extremo a extremo para toda tu informaciÃ³n</li>
                    <li>â€¢ Acceso solo mediante autenticaciÃ³n verificada</li>
                    <li>â€¢ AuditorÃ­a completa de todos los accesos a tu historial</li>
                    <li>â€¢ Cumplimiento total con normativas de protecciÃ³n de datos</li>
                    <li>â€¢ Servidores seguros con copias de respaldo encriptadas</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Marco Legal</h4>
                  <p className="text-sm text-blue-800 leading-relaxed">
                    Tu informaciÃ³n mÃ©dica estÃ¡ protegida bajo la <strong>Ley 1581 de 2012 de Colombia</strong> (ProtecciÃ³n de Datos Personales) y cumple con estÃ¡ndares internacionales como <strong>HIPAA</strong> (Health Insurance Portability and Accountability Act).
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full rounded-2xl h-12 justify-start"
              >
                <Shield className="h-5 w-5 mr-3" />
                <span className="font-medium">Ver PolÃ­tica de Privacidad Completa</span>
              </Button>

              <Button 
                variant="outline" 
                className="w-full rounded-2xl h-12 justify-start text-red-600 border-red-200 hover:bg-red-50"
              >
                <AlertCircle className="h-5 w-5 mr-3" />
                <span className="font-medium">Solicitar EliminaciÃ³n de Datos</span>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

