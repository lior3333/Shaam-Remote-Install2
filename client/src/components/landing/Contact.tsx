import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_CONFIG } from "@/lib/config";
import { Phone, CheckCircle, Smartphone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "נא להזין שם מלא (מינימום 2 תווים)" }),
  phone: z.string().min(9, { message: "נא להזין מספר טלפון תקין" }),
  message: z.string().optional(),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send data to a backend
    console.log(values);
    
    // Simulate network delay
    setTimeout(() => {
        toast({
          title: "ההודעה נשלחה בהצלחה!",
          description: "אצור איתך קשר בהקדם האפשרי לתיאום התקנה.",
          duration: 5000,
        });
        form.reset();
    }, 1000);
  }

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${CONTACT_CONFIG.whatsapp}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${CONTACT_CONFIG.phone}`;
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="contact">
        
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">בואו נתחיל לעבוד</h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              השאירו פרטים בטופס או צרו קשר ישירות בוואטסאפ לתיאום מהיר.
              אני זמין ברוב שעות היום למתן שירות מהיר ומקצועי.
            </p>

            <div className="space-y-6">
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto h-auto py-4 px-8 text-lg bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-lg flex items-center justify-center gap-3 transition-transform hover:scale-105"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                שלח הודעה ב-WhatsApp
              </Button>

              <Button 
                onClick={handlePhoneClick}
                variant="outline"
                className="w-full sm:w-auto h-auto py-4 px-8 text-lg border-slate-600 hover:bg-slate-800 text-white flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                חייג עכשיו: {CONTACT_CONFIG.phone}
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800">
               <div className="flex items-center gap-4 mb-4">
                  <div className="bg-slate-800 p-2 rounded-full">
                      <CheckCircle className="text-green-400 w-6 h-6" />
                  </div>
                  <div>
                      <h4 className="font-bold text-lg">{CONTACT_CONFIG.name}</h4>
                      <p className="text-slate-400">{CONTACT_CONFIG.role}</p>
                  </div>
               </div>
               <p className="text-slate-500 text-sm">
                   אני מתחייב לשירות מקצועי, אדיב ומהיר. אלפי רואי חשבון כבר נהנים מגישה חלקה לשע״מ.
               </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">השארת פרטים לחזרה</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>שם מלא</FormLabel>
                      <FormControl>
                        <Input placeholder="ישראל ישראלי" className="bg-slate-50 border-slate-200 focus-visible:ring-blue-500" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>מספר טלפון</FormLabel>
                      <FormControl>
                        <Input placeholder="050-0000000" type="tel" className="bg-slate-50 border-slate-200 focus-visible:ring-blue-500" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>הודעה (אופציונלי)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="אשמח לשמוע פרטים על..." 
                          className="bg-slate-50 border-slate-200 focus-visible:ring-blue-500 min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 shadow-md">
                  שלח פרטים
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}
