import { ArrowDown, Users, Shield, Sparkles, Plane } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-100/50 via-white to-green-100/50 flex items-center pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" />
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#cbd5e1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Full Network Visualization - Organic with random positions */}
        <svg className="absolute -inset-20 w-[calc(100%+160px)] h-[calc(100%+160px)] opacity-[0.06]" viewBox="0 0 1400 1000" preserveAspectRatio="xMidYMid slice">
          {/* Connection Lines - Organic Network */}
          <g stroke="#94a3b8" strokeWidth="2">
            {/* Cluster 1 - Top left */}
            <line x1="-40" y1="45" x2="85" y2="95" />
            <line x1="85" y1="95" x2="165" y2="55" />
            <line x1="165" y1="55" x2="280" y2="110" />
            <line x1="85" y1="95" x2="190" y2="175" />
            <line x1="190" y1="175" x2="280" y2="110" />
            <line x1="280" y1="110" x2="355" y2="190" />
            <line x1="190" y1="175" x2="355" y2="190" />
            <line x1="-60" y1="160" x2="85" y2="95" />
            <line x1="-60" y1="160" x2="190" y2="175" />

            {/* Cluster 2 - Top center */}
            <line x1="420" y1="65" x2="530" y2="120" />
            <line x1="530" y1="120" x2="650" y2="85" />
            <line x1="650" y1="85" x2="740" y2="145" />
            <line x1="530" y1="120" x2="610" y2="195" />
            <line x1="610" y1="195" x2="740" y2="145" />
            <line x1="420" y1="65" x2="355" y2="190" />
            <line x1="355" y1="190" x2="530" y2="120" />
            <line x1="355" y1="190" x2="475" y2="245" />
            <line x1="475" y1="245" x2="610" y2="195" />

            {/* Cluster 3 - Top right */}
            <line x1="870" y1="70" x2="980" y2="135" />
            <line x1="980" y1="135" x2="1100" y2="90" />
            <line x1="1100" y1="90" x2="1220" y2="150" />
            <line x1="980" y1="135" x2="1060" y2="210" />
            <line x1="1060" y1="210" x2="1220" y2="150" />
            <line x1="740" y1="145" x2="870" y2="70" />
            <line x1="740" y1="145" x2="850" y2="220" />
            <line x1="850" y1="220" x2="980" y2="135" />
            <line x1="850" y1="220" x2="1060" y2="210" />
            <line x1="1220" y1="150" x2="1350" y2="95" />
            <line x1="1350" y1="95" x2="1480" y2="160" />
            <line x1="1220" y1="150" x2="1320" y2="230" />

            {/* Middle row connections */}
            <line x1="190" y1="175" x2="120" y2="290" />
            <line x1="355" y1="190" x2="290" y2="315" />
            <line x1="475" y1="245" x2="390" y2="340" />
            <line x1="610" y1="195" x2="560" y2="305" />
            <line x1="740" y1="145" x2="695" y2="275" />
            <line x1="850" y1="220" x2="820" y2="330" />
            <line x1="1060" y1="210" x2="1000" y2="320" />
            <line x1="1220" y1="150" x2="1150" y2="285" />
            <line x1="1320" y1="230" x2="1280" y2="350" />

            {/* Cluster 4 - Middle left */}
            <line x1="-50" y1="310" x2="60" y2="365" />
            <line x1="60" y1="365" x2="120" y2="290" />
            <line x1="120" y1="290" x2="210" y2="370" />
            <line x1="210" y1="370" x2="290" y2="315" />
            <line x1="290" y1="315" x2="390" y2="340" />
            <line x1="60" y1="365" x2="150" y2="445" />
            <line x1="150" y1="445" x2="210" y2="370" />
            <line x1="210" y1="370" x2="320" y2="430" />
            <line x1="320" y1="430" x2="390" y2="340" />

            {/* Cluster 5 - Center */}
            <line x1="390" y1="340" x2="480" y2="410" />
            <line x1="480" y1="410" x2="560" y2="305" />
            <line x1="560" y1="305" x2="650" y2="385" />
            <line x1="650" y1="385" x2="695" y2="275" />
            <line x1="695" y1="275" x2="780" y2="360" />
            <line x1="780" y1="360" x2="820" y2="330" />
            <line x1="480" y1="410" x2="580" y2="480" />
            <line x1="580" y1="480" x2="650" y2="385" />
            <line x1="650" y1="385" x2="720" y2="465" />
            <line x1="720" y1="465" x2="780" y2="360" />

            {/* Cluster 6 - Middle right */}
            <line x1="820" y1="330" x2="910" y2="400" />
            <line x1="910" y1="400" x2="1000" y2="320" />
            <line x1="1000" y1="320" x2="1090" y2="395" />
            <line x1="1090" y1="395" x2="1150" y2="285" />
            <line x1="1150" y1="285" x2="1240" y2="375" />
            <line x1="1240" y1="375" x2="1280" y2="350" />
            <line x1="910" y1="400" x2="1010" y2="475" />
            <line x1="1010" y1="475" x2="1090" y2="395" />
            <line x1="1090" y1="395" x2="1180" y2="460" />
            <line x1="1180" y1="460" x2="1240" y2="375" />
            <line x1="1280" y1="350" x2="1380" y2="420" />
            <line x1="1380" y1="420" x2="1470" y2="355" />

            {/* Lower middle connections */}
            <line x1="150" y1="445" x2="95" y2="540" />
            <line x1="320" y1="430" x2="260" y2="530" />
            <line x1="480" y1="410" x2="430" y2="520" />
            <line x1="580" y1="480" x2="540" y2="575" />
            <line x1="720" y1="465" x2="680" y2="555" />
            <line x1="910" y1="400" x2="860" y2="515" />
            <line x1="1010" y1="475" x2="965" y2="560" />
            <line x1="1180" y1="460" x2="1130" y2="545" />
            <line x1="1380" y1="420" x2="1320" y2="530" />

            {/* Cluster 7 - Bottom left */}
            <line x1="-70" y1="520" x2="40" y2="590" />
            <line x1="40" y1="590" x2="95" y2="540" />
            <line x1="95" y1="540" x2="175" y2="615" />
            <line x1="175" y1="615" x2="260" y2="530" />
            <line x1="260" y1="530" x2="350" y2="600" />
            <line x1="40" y1="590" x2="130" y2="680" />
            <line x1="130" y1="680" x2="175" y2="615" />
            <line x1="175" y1="615" x2="280" y2="690" />
            <line x1="280" y1="690" x2="350" y2="600" />

            {/* Cluster 8 - Bottom center */}
            <line x1="350" y1="600" x2="430" y2="520" />
            <line x1="430" y1="520" x2="510" y2="610" />
            <line x1="510" y1="610" x2="540" y2="575" />
            <line x1="540" y1="575" x2="620" y2="650" />
            <line x1="620" y1="650" x2="680" y2="555" />
            <line x1="680" y1="555" x2="760" y2="635" />
            <line x1="350" y1="600" x2="440" y2="695" />
            <line x1="440" y1="695" x2="510" y2="610" />
            <line x1="510" y1="610" x2="590" y2="705" />
            <line x1="590" y1="705" x2="620" y2="650" />
            <line x1="620" y1="650" x2="710" y2="720" />
            <line x1="710" y1="720" x2="760" y2="635" />

            {/* Cluster 9 - Bottom right */}
            <line x1="760" y1="635" x2="860" y2="515" />
            <line x1="860" y1="515" x2="935" y2="620" />
            <line x1="935" y1="620" x2="965" y2="560" />
            <line x1="965" y1="560" x2="1055" y2="640" />
            <line x1="1055" y1="640" x2="1130" y2="545" />
            <line x1="1130" y1="545" x2="1210" y2="625" />
            <line x1="1210" y1="625" x2="1320" y2="530" />
            <line x1="935" y1="620" x2="1020" y2="710" />
            <line x1="1020" y1="710" x2="1055" y2="640" />
            <line x1="1055" y1="640" x2="1145" y2="720" />
            <line x1="1145" y1="720" x2="1210" y2="625" />
            <line x1="1320" y1="530" x2="1420" y2="610" />
            <line x1="1420" y1="610" x2="1490" y2="540" />

            {/* Bottom row connections */}
            <line x1="130" y1="680" x2="75" y2="780" />
            <line x1="280" y1="690" x2="220" y2="790" />
            <line x1="440" y1="695" x2="380" y2="805" />
            <line x1="590" y1="705" x2="530" y2="815" />
            <line x1="710" y1="720" x2="660" y2="830" />
            <line x1="935" y1="620" x2="885" y2="760" />
            <line x1="1020" y1="710" x2="970" y2="825" />
            <line x1="1145" y1="720" x2="1095" y2="840" />
            <line x1="1420" y1="610" x2="1360" y2="750" />

            {/* Bottom edge */}
            <line x1="-50" y1="780" x2="75" y2="780" />
            <line x1="75" y1="780" x2="220" y2="790" />
            <line x1="220" y1="790" x2="380" y2="805" />
            <line x1="380" y1="805" x2="530" y2="815" />
            <line x1="530" y1="815" x2="660" y2="830" />
            <line x1="660" y1="830" x2="810" y2="820" />
            <line x1="810" y1="820" x2="970" y2="825" />
            <line x1="970" y1="825" x2="1095" y2="840" />
            <line x1="1095" y1="840" x2="1230" y2="830" />
            <line x1="1230" y1="830" x2="1360" y2="750" />
            <line x1="1360" y1="750" x2="1480" y2="810" />
            <line x1="75" y1="780" x2="50" y2="900" />
            <line x1="220" y1="790" x2="180" y2="920" />
            <line x1="380" y1="805" x2="340" y2="940" />
            <line x1="530" y1="815" x2="500" y2="950" />
            <line x1="660" y1="830" x2="640" y2="960" />
            <line x1="810" y1="820" x2="790" y2="930" />
            <line x1="970" y1="825" x2="950" y2="950" />
            <line x1="1095" y1="840" x2="1080" y2="970" />
            <line x1="1230" y1="830" x2="1220" y2="940" />
            <line x1="1360" y1="750" x2="1380" y2="890" />

            {/* Additional cross connections for organic feel */}
            <line x1="280" y1="110" x2="420" y2="65" />
            <line x1="650" y1="85" x2="870" y2="70" />
            <line x1="320" y1="430" x2="480" y2="410" />
            <line x1="720" y1="465" x2="910" y2="400" />
            <line x1="280" y1="690" x2="440" y2="695" />
            <line x1="710" y1="720" x2="935" y2="620" />
            <line x1="165" y1="55" x2="120" y2="-30" />
            <line x1="530" y1="120" x2="580" y2="20" />
            <line x1="980" y1="135" x2="1020" y2="40" />
            <line x1="1350" y1="95" x2="1400" y2="-20" />
          </g>

          {/* Nodes - Larger with more random positions */}
          <g fill="#2563eb">
            <circle cx="85" cy="95" r="6" />
            <circle cx="280" cy="110" r="5" />
            <circle cx="530" cy="120" r="7" />
            <circle cx="740" cy="145" r="5" />
            <circle cx="980" cy="135" r="6" />
            <circle cx="1220" cy="150" r="5" />
            <circle cx="390" cy="340" r="6" />
            <circle cx="650" cy="385" r="7" />
            <circle cx="1000" cy="320" r="5" />
            <circle cx="580" cy="480" r="5" />
            <circle cx="720" cy="465" r="6" />
            <circle cx="510" cy="610" r="5" />
            <circle cx="760" cy="635" r="6" />
            <circle cx="660" cy="830" r="5" />
          </g>

          <g fill="#16a34a">
            <circle cx="165" cy="55" r="5" />
            <circle cx="355" cy="190" r="6" />
            <circle cx="610" cy="195" r="5" />
            <circle cx="850" cy="220" r="7" />
            <circle cx="1060" cy="210" r="5" />
            <circle cx="1320" cy="230" r="6" />
            <circle cx="290" cy="315" r="5" />
            <circle cx="560" cy="305" r="6" />
            <circle cx="820" cy="330" r="5" />
            <circle cx="1090" cy="395" r="6" />
            <circle cx="430" cy="520" r="5" />
            <circle cx="680" cy="555" r="6" />
            <circle cx="965" cy="560" r="5" />
            <circle cx="620" cy="650" r="7" />
            <circle cx="1055" cy="640" r="5" />
            <circle cx="530" cy="815" r="5" />
            <circle cx="970" cy="825" r="6" />
          </g>

          <g fill="#f59e0b">
            <circle cx="190" cy="175" r="5" />
            <circle cx="475" cy="245" r="6" />
            <circle cx="695" cy="275" r="5" />
            <circle cx="1150" cy="285" r="6" />
            <circle cx="120" cy="290" r="5" />
            <circle cx="480" cy="410" r="5" />
            <circle cx="780" cy="360" r="6" />
            <circle cx="1180" cy="460" r="5" />
            <circle cx="260" cy="530" r="6" />
            <circle cx="540" cy="575" r="5" />
            <circle cx="860" cy="515" r="6" />
            <circle cx="1130" cy="545" r="5" />
            <circle cx="350" cy="600" r="5" />
            <circle cx="935" cy="620" r="6" />
            <circle cx="380" cy="805" r="5" />
            <circle cx="1095" cy="840" r="6" />
          </g>

          <g fill="#9333ea">
            <circle cx="-40" cy="45" r="5" />
            <circle cx="420" cy="65" r="5" />
            <circle cx="870" cy="70" r="6" />
            <circle cx="1350" cy="95" r="5" />
            <circle cx="-60" cy="160" r="5" />
            <circle cx="1480" cy="160" r="5" />
            <circle cx="60" cy="365" r="6" />
            <circle cx="1240" cy="375" r="5" />
            <circle cx="150" cy="445" r="5" />
            <circle cx="910" cy="400" r="6" />
            <circle cx="1380" cy="420" r="5" />
            <circle cx="40" cy="590" r="5" />
            <circle cx="1210" cy="625" r="6" />
            <circle cx="1420" cy="610" r="5" />
            <circle cx="130" cy="680" r="5" />
            <circle cx="1145" cy="720" r="6" />
            <circle cx="75" cy="780" r="5" />
            <circle cx="1230" cy="830" r="5" />
            <circle cx="1360" cy="750" r="6" />
          </g>

          <g fill="#64748b">
            <circle cx="120" cy="-30" r="4" />
            <circle cx="580" cy="20" r="4" />
            <circle cx="1020" cy="40" r="4" />
            <circle cx="1400" cy="-20" r="4" />
            <circle cx="210" cy="370" r="4" />
            <circle cx="1010" cy="475" r="4" />
            <circle cx="320" cy="430" r="4" />
            <circle cx="175" cy="615" r="5" />
            <circle cx="440" cy="695" r="4" />
            <circle cx="590" cy="705" r="4" />
            <circle cx="710" cy="720" r="5" />
            <circle cx="1020" cy="710" r="4" />
            <circle cx="280" cy="690" r="4" />
            <circle cx="810" cy="820" r="5" />
            <circle cx="50" cy="900" r="4" />
            <circle cx="180" cy="920" r="4" />
            <circle cx="340" cy="940" r="4" />
            <circle cx="500" cy="950" r="4" />
            <circle cx="640" cy="960" r="4" />
            <circle cx="790" cy="930" r="4" />
            <circle cx="950" cy="950" r="4" />
            <circle cx="1080" cy="970" r="4" />
            <circle cx="1220" cy="940" r="4" />
            <circle cx="1380" cy="890" r="4" />
          </g>
        </svg>
        {/* Gradient Fade Top */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-8">
            <Sparkles size={16} />
            <span>Open Source Forschungsprojekt</span>
          </div>

          {/* Main Headline */}
          <h1 className="heading-1 text-slate-900 mb-6">
            Vertrauen entsteht durch{' '}
            <span className="text-primary-600">echte Begegnungen</span>
          </h1>

          {/* Subheadline */}
          <p className="text-body max-w-2xl mx-auto mb-10">
            Ein dezentrales Vertrauensnetzwerk für lokale Gemeinschaften.
            Menschen vernetzen sich basierend auf echten Begegnungen statt Algorithmen.
            Deine Daten bleiben bei dir.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#konzept" className="btn-primary">
              Mehr erfahren
            </a>
            <a
              href="https://github.com/antontranelis/web-of-trust-concept"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Auf GitHub ansehen
            </a>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="flex items-center justify-center gap-3 text-slate-600">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <Users size={20} className="text-primary-600" />
              </div>
              <span className="font-medium">Persönliche Verifizierung</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-600">
              <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
                <Shield size={20} className="text-secondary-600" />
              </div>
              <span className="font-medium">Ende-zu-Ende verschlüsselt</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-600">
              <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-600" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599" />
                </svg>
              </div>
              <span className="font-medium">Funktioniert offline</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#konzept" className="text-slate-400 hover:text-primary-600 transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
