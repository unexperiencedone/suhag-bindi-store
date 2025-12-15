import { PublicLayout } from "@/components/layout/public-layout";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/generated_images/luxurious_indian_jewelry_on_maroon_velvet.png";

export default function About() {
  return (
    <PublicLayout>
      {/* Hero Banner */}
      <div className="h-[40vh] bg-primary relative flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-serif font-bold mb-4">Our Story</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Legacy of tradition, quality, and trust.</p>
        </div>
      </div>

      <div className="container px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Badge className="bg-accent text-accent-foreground hover:bg-accent/80 mb-2">Since 1995</Badge>
            <h2 className="text-4xl font-serif font-bold text-primary">Suhag Bindi Store</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded by <strong>Surendra Kumar Verma</strong>, Suhag Bindi Store has grown from a small local shop in Varanasi to a leading manufacturer and wholesaler of traditional Indian jewelry and bindis.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in creating intricate designs that blend traditional artistry with modern aesthetics. Our commitment to quality and customer satisfaction has made us a trusted name in the industry.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, managed by <strong>Satyam Verma</strong>, we continue to expand our reach, serving retailers and customers across India with our premium collection of fancy bindis, mangalsutras, and imitation jewelry.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl rotate-3 transform hover:rotate-0 transition-all duration-500">
               {/* Placeholder for Owner Image */}
               <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary/40 font-serif text-2xl">
                 Owner Portrait
               </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
              <p className="font-serif text-primary text-lg font-bold">"Quality is not just an act, it is a habit."</p>
              <p className="text-sm text-gray-500 mt-2">- Surendra Kumar Verma</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted/30 py-20">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-primary">Craftsmanship</h3>
              <p className="text-muted-foreground">Detailed attention to every bindi and piece of jewelry we manufacture.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-primary">Tradition</h3>
              <p className="text-muted-foreground">Keeping the essence of Indian culture alive in every design.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-primary">Trust</h3>
              <p className="text-muted-foreground">Building lasting relationships with our wholesale partners.</p>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
