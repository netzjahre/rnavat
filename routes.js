//source: https://github.com/microtony/fr24-overlay-vhhk
//var vhhhauto = 1;
//var vhhhautocb = function() {};
(function() {
    var colors = {
        app : { strokeColor: '#FFFFFF', strokeOpacity: 0.5, strokeWeight: 1 },
        app2 : { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-4 0,4', strokeColor : '#FFFFFF', strokeOpacity: 0.5, scale: 1 }, offset: '0', repeat: '14px' }] },
        center07 : { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-0.1 0,0.1', strokeColor : '#FFFF00', strokeOpacity: 0.6, strokeWeight: 3, }, offset: '0', repeat: '8.3333%' }] },
        center25 : { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-0.1 0,0.1', strokeColor : '#FFFF00', strokeOpacity: 0.6, strokeWeight: 3, }, offset: '0', repeat: '4%' }] },
        center07b : { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-0.1 0,0.1', strokeColor : '#FFFF00', strokeOpacity: 0.8, strokeWeight: 4, }, offset: '0', repeat: '50%' }] },
        center25b : { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-0.1 0,0.1', strokeColor : '#FFFF00', strokeOpacity: 0.8, strokeWeight: 4, }, offset: '0', repeat: '20%' }] },
        star: { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-2, 0,2', strokeColor : '#66FF66', strokeOpacity: 0.6, scale: 1 }, offset: '0', repeat: '7px' }] },
        star2: { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-5 0,5', strokeColor : '#66CCFF', strokeOpacity: 0.5, scale: 1 }, offset: '0', repeat: '16px' }] },
        starterm : { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-2, 0,2', strokeColor : '#66FF66', strokeOpacity: 0.5, scale: 1 }, offset: '0', repeat: '7px' }] },
        starterm2 : { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-2, 0,2', strokeColor : '#66FF66', strokeOpacity: 0.3, scale: 1 }, offset: '0', repeat: '9px' }] },
        starterm3 : { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-5 0,5', strokeColor : '#66CCFF', strokeOpacity: 0.6, scale: 1 }, offset: '0', repeat: '16px' }] },
        sid : { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-2 0,2', strokeColor : '#FFDD66', strokeOpacity: 0.6, scale: 1 }, offset: '0', repeat: '7px' }] },
        sid2 : { strokeOpacity: 0, icons : [{ icon: { path: 'M 0,-2 0,2', strokeColor : '#FFDD66', strokeOpacity: 0.4, scale: 1 }, offset: '0', repeat: '7px' }] },
        sidterm2 : { strokeColor: '#FFDD66', strokeOpacity: 0.2, strokeWeight: 1 },
        sidterm : { strokeColor: '#FFDD66', strokeOpacity: 0.3, strokeWeight: 1 },
        airway : { strokeColor: '#FF0040', strokeOpacity: 1.0, strokeWeight: 1 },
        transit : { strokeColor: '#FFFFFF', strokeOpacity: 0.2, strokeWeight: 1 },
    };

    var triangle = { path: 'M 0,-2.2 2.5,2.13 -2.5,2.13 z', fillColor: '#FF0040', fillOpacity: 1.0, strokeWeight: 0, scale: 2.0 };
    var noicon = { path: 'M 0,0 z', fillColor: '#EEEEEE', fillOpacity: 0, strokeWeight: 0, scale: 1 };

    var fix = function(lat, lng, title) {
      var pos = new google.maps.LatLng(lat, lng);
      if (title != '') {
        return new google.maps.Marker({position: pos, icon: triangle, map: map, title: title });
      } else {
        return new google.maps.Marker({position: pos, icon: noicon, map: map});
      }
    }
    var pos = function(lat, lng) {
        return new google.maps.LatLng(lat, lng);
    }

    var fixes = { app : {}, star : {}, term: {}, rwy: {}, sid: {}, airway: {} };

	fixes.airway.ABETI = fix(47.677714, 17.012842, 'ABETI'); // L610, UL610				
	fixes.airway.ABIRI = fix(46.762667, 14.967572, 'ABIRI'); // P978, Q102, UP978			
	fixes.airway.ABISO = fix(46.747667, 14.352258, 'ABISO'); // L608, M867, UL608, UM867		
	fixes.airway.ABLOM = fix(48.055111, 17.087703, 'ABLOM'); // L725, M985, UL725, UM985, UQ985, UT849
	fixes.airway.ABRUK = fix(47.993944, 15.006631, 'ABRUK'); // M984, UM138, UM984			
	fixes.airway.ABUDO = fix(48.808056, 14.240089, 'ABUDO'); // UZ37, Z37				
	fixes.airway.ADILO = fix(47.754389, 10.947653, 'ADILO'); // Y703					
	fixes.airway.ADLET = fix(48.065444, 14.299283, 'ADLET'); // UL850, UZ33, Z33			
	fixes.airway.AKIMA = fix(48.796333, 13.310414, 'AKIMA'); // Q104					
	fixes.airway.ALILA = fix(47.990167, 11.553664, 'ALILA'); // Y108					
	fixes.airway.ALMER = fix(48.110444, 14.332181, 'ALMER'); // L604, L605, UL604, UL605		
	fixes.airway.AMADI = fix(48.480389, 12.913792, 'AMADI'); // Q113					
	fixes.airway.ANEXA = fix(47.305500, 18.486231, 'ANEXA'); // L175, UL175				
	fixes.airway.ARLON = fix(46.836000, 15.029764, 'ARLON'); // L603, N737, UN737			
	fixes.airway.ARNOS = fix(46.484222, 13.569311, 'ARNOS'); // P125, Q100, UP125			
	fixes.airway.ARSIN = fix(47.042111, 16.753744, 'ARSIN'); // L851, UL851, UQ254			
	fixes.airway.ARTUS = fix(47.863556, 12.270267, 'ARTUS'); // M19, UM19, UZ33, Y106, Z33	
	fixes.airway.ASKOD = fix(47.139889, 15.871294, 'ASKOD'); // L156, M985, UL156, UM985		
	fixes.airway.BABIT = fix(45.913778, 18.928972, 'BABIT'); // N739, UN739				
	fixes.airway.BADIT = fix(48.869167, 12.834444, 'BADIT'); // T700, T702				
	fixes.airway.BADVI = fix(47.877111, 11.945381, 'BADVI'); // Y107					
	fixes.airway.BAGSI = fix(48.470000, 14.289717, 'BAGSI'); // L604, L856, UL604, UL856, Y703	
	fixes.airway.BAKOR = fix(46.543333, 11.728611, 'BAKOR'); // M984, N503, UM984, UN503, Y107	
	fixes.airway.BARUG = fix(47.824222, 15.355536, 'BARUG'); // L725, UL725				
	fixes.airway.BEDOX = fix(46.966500, 15.826233, 'BEDOX'); // UL863, UQ856, UQ863			
	fixes.airway.BEGLA = fix(47.856278, 17.114428, 'BEGLA'); // L850, M749, UL850, UM749		
	fixes.airway.BEMKI = fix(47.572500, 10.305594, 'BEMKI'); // T103, T23, UL607, UT23		
	fixes.airway.BERAS = fix(47.567833, 11.769575, 'BERAS'); // M736, T23, UM736, UT23		
	fixes.airway.BERTA = fix(46.989722, 14.625236, 'BERTA'); // L25, L868, UL25, UL868		
	fixes.airway.BIBAG = fix(48.829389, 12.749781, 'BIBAG'); // L605, Q104, Q118, UL605		
	fixes.airway.BILDU = fix(47.229444, 10.661781, 'BILDU'); // N606, UN606				
	fixes.airway.BIRGI = fix(47.872222, 11.923889, 'BIRGI'); // T23, UQ303, UT23, UZ209, Z209	
	fixes.airway.BRENO = fix(46.816111, 11.376667, 'BRENO'); // M726, UM726				
	fixes.airway.BUDEX = fix(48.915222, 14.336028, 'BUDEX'); // UZ205, UZ37, Z205, Z37		
	fixes.airway.BUMUK = fix(47.144167, 13.506569, 'BUMUK'); // L173, L863, UL173, UL863
	fixes.airway.DEGAB = fix(48.705683, 13.931494, 'DEGAB'); //	L608, M867, UL608, UM867	
	fixes.airway.DEGES = fix(47.412500, 09.201944, 'DEGES'); //	L725, M985, UL725, UM985, UQ985,
	fixes.airway.DEGUM = fix(46.465864, 13.699278, 'DEGUM'); //	M984, UM138, UM984		
	fixes.airway.DENED = fix(47.269581, 11.086914, 'DENED'); //	UZ37, Z37			
	fixes.airway.DENUX = fix(48.070369, 15.880661, 'DENUX'); //	Y703				
	fixes.airway.DETSA = fix(46.802500, 12.281111, 'DETSA'); //	UL850, UZ33, Z33		
	fixes.airway.DIMLO = fix(46.683489, 16.422722, 'DIMLO'); //	Q104				
	fixes.airway.DIPSA = fix(46.609606, 14.922244, 'DIPSA'); //	Y108				
	fixes.airway.DIRAB = fix(46.813717, 11.062317, 'DIRAB'); //	L604, L605, UL604, UL605	
	fixes.airway.DITIS = fix(48.898022, 15.116361, 'DITIS'); //	Q113				
	fixes.airway.DIVAL = fix(47.554908, 16.129642, 'DIVAL'); //	L175, UL175			
	fixes.airway.DOMAL = fix(49.094556, 13.428647, 'DOMAL'); //	L603, N737, UN737		
	fixes.airway.DORAP = fix(47.472736, 09.600972, 'DORAP'); //	P125, Q100, UP125		
	fixes.airway.ELKAT = fix(46.991006, 13.905506, 'ELKAT'); //	L851, UL851, UQ254		
	fixes.airway.ELMEM = fix(47.285633, 10.570739, 'ELMEM'); //	M19, UM19, UZ33, Y106, Z33
	fixes.airway.ELSIS = fix(46.758761, 15.611408, 'ELSIS'); //	L156, M985, UL156, UM985	
	fixes.airway.EPODO = fix(46.195992, 14.077028, 'EPODO'); //	N739, UN739			
	fixes.airway.ERANI = fix(47.733858, 12.953033, 'ERANI'); //	T700, T702			
	fixes.airway.ERKIR = fix(47.537778, 12.008889, 'ERKIR'); //	Y107				
	fixes.airway.ESEGA = fix(48.296444, 13.181469, 'ESEGA'); //	L604, L856, UL604, UL856, Y703
	fixes.airway.ETAGO = fix(48.727500, 09.460000, 'ETAGO'); //	M984, N503, UM984, UN503, Y107
	fixes.airway.GAMLI = fix(47.906667, 14.778889, 'GAMLI'); //	L725, UL725			
	fixes.airway.GAMSA = fix(47.408453, 09.651911, 'GAMSA'); //	UL863, UQ856, UQ863		
	fixes.airway.GAPTO = fix(47.468583, 10.759431, 'GAPTO'); //	L850, M749, UL850, UM749	
	fixes.airway.GESGI = fix(47.835428, 16.435158, 'GESGI'); //	T103, T23, UL607, UT23	
	fixes.airway.GIMBO = fix(48.725364, 14.775831, 'GIMBO'); //	M736, T23, UM736, UT23	
	fixes.airway.GIMIX = fix(46.522989, 13.714081, 'GIMIX'); //	L25, L868, UL25, UL868	
	fixes.airway.GIRIS = fix(46.771781, 10.884122, 'GIRIS'); //	L605, Q104, Q118, UL605	
	fixes.airway.GISPO = fix(48.098797, 16.129533, 'GISPO'); //	N606, UN606			
	fixes.airway.GOGEM = fix(47.018275, 11.526350, 'GOGEM'); //	T23, UQ303, UT23, UZ209, Z209
	fixes.airway.GOLVA = fix(46.708769, 15.652372, 'GOLVA'); //	M726, UM726			
	fixes.airway.GONBA = fix(48.687642, 13.075717, 'GONBA'); //	UZ205, UZ37, Z205, Z37	
	fixes.airway.GOTAR = fix(46.997881, 16.224764, 'GOTAR'); //	L173, L863, UL173, UL863
	fixes.airway.GUKTU = fix(48.168297, 16.760467, 'GUKTU'); // UL856, UM138       
	fixes.airway.IBROT = fix(46.690278, 11.471944, 'IBROT'); // M736, UM736, Y108      
	fixes.airway.INLOX = fix(47.197764, 14.755944, 'INLOX'); // L868, P125, T319      
	fixes.airway.INTEG = fix(47.150556, 09.935833, 'INTEG'); // UZ613        
	fixes.airway.IRBIR = fix(47.566414, 11.103569, 'IRBIR'); // T102        
	fixes.airway.KANIN = fix(46.440464, 13.628689, 'KANIN'); // UY66, Y66       
	fixes.airway.KIRDI = fix(48.207678, 12.821653, 'KIRDI'); // L174, T700, UL174      
	fixes.airway.KLAGY = fix(46.514300, 14.775169, 'KLAGY'); // L603, UL603       
	fixes.airway.KOGEX = fix(47.113247, 15.287058, 'KOGEX'); // L604, N739       
	fixes.airway.KOGOL = fix(47.622267, 11.399850, 'KOGOL'); // L608, M726, N871, UL608, UM726, UN871   
	fixes.airway.KOVEL = fix(48.700903, 15.597083, 'KOVEL'); // M174, UM174, UZ21, UZ81, Z21, Z81   
	fixes.airway.KUSAM = fix(47.137222, 10.281944, 'KUSAM'); // UZ209, Z119, Z209      
	fixes.airway.KUVEX = fix(47.908333, 17.437500, 'KUVEX'); // Q110        
	fixes.airway.LADAG = fix(48.588981, 15.041106, 'LADAG'); // UZ37, Z37       
	fixes.airway.LAMSI = fix(48.653353, 13.583442, 'LAMSI'); // L175, L604, UL175, UL604     
	fixes.airway.LANUX = fix(48.888106, 15.615789, 'LANUX'); // L858, M725, UL858, UM725     
	fixes.airway.LAPNA = fix(46.535497, 15.520431, 'LAPNA'); // L156, L859, UL156, UL859     
	fixes.airway.LEDRI = fix(48.090889, 17.182853, 'LEDRI'); // L725, M985, UL725, UM985     
	fixes.airway.LEDVA = fix(48.728789, 16.789194, 'LEDVA'); // L156, L859, UL156      
	fixes.airway.LEOBE = fix(47.363689, 15.026964, 'LEOBE'); // L604        
	fixes.airway.LIKDA = fix(47.016917, 11.750842, 'LIKDA'); // N503, UN503       
	fixes.airway.LIMRA = fix(47.910981, 14.447783, 'LIMRA'); // L604, L725, L868, UL604, UL725    
	fixes.airway.LIVDU = fix(47.880411, 16.081067, 'LIVDU'); // L156, L725, UL156, UL725     
	fixes.airway.LIZUM = fix(47.115069, 11.756036, 'LIZUM'); // L607, L74, M736, N503, UL607, UL74, UM736, UN503, Z2
	fixes.airway.LOKVU = fix(48.874717, 15.834997, 'LOKVU'); // M749, UM749       
	fixes.airway.LOMRO = fix(47.733356, 12.357878, 'LOMRO'); // M867, UM867, UP994      
	fixes.airway.LUGIM = fix(48.185619, 15.109022, 'LUGIM'); // L174, L610, UL174, UL610     
	fixes.airway.LUMUS = fix(46.590103, 14.156300, 'LUMUS'); // L172, UL172       
	fixes.airway.LUXEK = fix(47.669086, 11.616889, 'LUXEK'); // Y108        
	fixes.airway.MADEB = fix(47.324375, 10.288886, 'MADEB'); // M738, N606, N871, UM738, UN606, UN871   
	fixes.airway.MALUG = fix(46.706111, 12.597500, 'MALUG'); // M985, P978, UM985, UP978, UQ985    
	fixes.airway.MAREG = fix(48.190489, 16.969089, 'MAREG'); // L175, UL175, UL856      
	fixes.airway.MASUR = fix(48.520097, 15.439292, 'MASUR'); // UZ37, Z37 								  
	fixes.airway.MATAR = fix(46.974936, 11.253306, 'MATAR'); // T101        
	fixes.airway.MATIG = fix(48.058592, 13.541494, 'MATIG'); // L856, Q113, UL856      
	fixes.airway.MEBEK = fix(48.231944, 12.565556, 'MEBEK'); // T702        
	fixes.airway.MIKOV = fix(48.784744, 16.621003, 'MIKOV'); // M984, UM984       
	fixes.airway.MILGO = fix(47.301711, 15.091650, 'MILGO'); // L604, P125, P870, Q112, UL604, UP870   
	fixes.airway.MIRSO = fix(46.475986, 15.841981, 'MIRSO'); // L604, M725, UL604, UM725     
	fixes.airway.MOGMA = fix(47.872222, 16.933889, 'MOGMA'); // Q104, Q110       
	fixes.airway.MOGTI = fix(47.388981, 10.716836, 'MOGTI'); // L12, P66, UL12, UP66, UQ163, Y703   
	fixes.airway.MOPIP = fix(48.226156, 13.827008, 'MOPIP'); // L174, Q118       
	fixes.airway.MORED = fix(47.876353, 13.015456, 'MORED'); // L173, L725, Q112, UL173, UL725    
	fixes.airway.MOTIX = fix(48.318500, 14.585644, 'MOTIX'); // L610, UL610       
	fixes.airway.MOVOS = fix(47.911278, 16.437244, 'MOVOS'); // L725        
	fixes.airway.MUREG = fix(46.706736, 15.808050, 'MUREG'); // M19, UM19       
	fixes.airway.NAKUM = fix(46.725025, 14.351311, 'NAKUM'); // L603, P978, UL603, UP978     
	fixes.airway.NANIT = fix(47.393019, 12.346436, 'NANIT'); // Y703        
	fixes.airway.NAPSA = fix(48.144167, 12.345556, 'NAPSA'); // Q113        
	fixes.airway.NATAG = fix(46.857992, 10.618750, 'NATAG'); // M738, UM738, Y740      
	fixes.airway.NAVTI = fix(48.769611, 16.205058, 'NAVTI'); // UT221        
	fixes.airway.NEDSO = fix(46.913628, 13.231592, 'NEDSO'); // UQ310, UQ856       
	fixes.airway.NEGRA = fix(47.722222, 09.427222, 'NEGRA'); // UZ613        
	fixes.airway.NELPA = fix(49.281406, 14.956169, 'NELPA'); // UQ233, UZ21, Z21      
	fixes.airway.NEMAL = fix(47.918056, 13.498333, 'NEMAL'); // L725, UL725, UZ33, Z33     
	fixes.airway.NENUM = fix(48.538572, 12.947800, 'NENUM'); // Y700        
	fixes.airway.NEPUX = fix(49.538178, 13.609839, 'NEPUX'); // UM174        
	fixes.airway.NESES = fix(47.547933, 10.554711, 'NESES'); // P66, T103, UP66      
	fixes.airway.NEVAG = fix(46.663394, 14.134439, 'NEVAG'); // L25, UL25       
	fixes.airway.NIDLO = fix(46.804175, 15.995600, 'NIDLO'); // T23, UT23       
	fixes.airway.NIGEB = fix(47.089139, 11.076875, 'NIGEB'); // P66, T102, UP66      
	fixes.airway.NIGSI = fix(47.369167, 16.036111, 'NIGSI'); // L859, UL859       
	fixes.airway.NIMDU = fix(47.171986, 14.782678, 'NIMDU'); // M985, UM985       
	fixes.airway.NIPEL = fix(46.489472, 14.032597, 'NIPEL'); // M867, UM867, UQ310      
	fixes.airway.NOKDA = fix(46.855617, 13.508125, 'NOKDA'); // M867, Q100, Q102, UM867     
	fixes.airway.NORIN = fix(47.386603, 11.402297, 'NORIN'); // M726, T23, UM726, UT23     
	fixes.airway.NORTO = fix(47.266356, 11.251822, 'NORTO'); // T101        
	fixes.airway.NUNRI = fix(47.586667, 09.652500, 'NUNRI'); // T103        
	fixes.airway.OBAGA = fix(47.547089, 11.251253, 'OBAGA'); // T101        
	fixes.airway.OBEDI = fix(47.327897, 13.329747, 'OBEDI'); // L603, M19, N739, T319, UL603, UM19, UN739						  
	fixes.airway.OBIGU = fix(47.531228, 14.851250, 'OBIGU');
	fixes.airway.OBUTI = fix(46.378303, 16.274050, 'OBUTI');
	fixes.airway.OGRUB = fix(47.915811, 13.930033, 'OGRUB');
	fixes.airway.OLASO = fix(48.208333, 10.231944, 'OLASO');
	fixes.airway.OLATI = fix(46.987272, 17.479172, 'OLATI');
	fixes.airway.OLPIX = fix(47.017342, 11.690311, '0LPIX');
	fixes.airway.OSDER = fix(47.683333, 10.891667, 'OSDER');
	fixes.airway.OSDOV = fix(47.440136, 10.183317, 'OSDOV');
	fixes.airway.OSMOT = fix(46.682969, 15.580436, 'OSMOT');
	fixes.airway.OSPEN = fix(47.485292, 15.527419, 'OSPEN');
	fixes.airway.OTRES = fix(47.023469, 10.742369, 'OTRES');
	fixes.airway.PABSA = fix(48.528269, 13.738139, 'PABSA');
	fixes.airway.PASAU = fix(48.802500, 13.651111, 'PASAU');
	fixes.airway.PEPOS = fix(46.881897, 14.440692, 'PEPOS');
	fixes.airway.PEREX = fix(47.639528, 13.243758, 'PEREX');
	fixes.airway.PIDON = fix(46.122356, 18.069333, 'PIDON');
	fixes.airway.PIKIT = fix(46.437069, 14.346175, 'PIKIT');
	fixes.airway.PISAM = fix(48.892914, 15.387128, 'PISAM');
	fixes.airway.PIVES = fix(49.921244, 15.146594, 'PIVES');
	fixes.airway.PODET = fix(46.171375, 15.626797, 'PODET');
	fixes.airway.PUBEG = fix(47.511244, 15.661994, 'PUBEG');
	fixes.airway.RADLY = fix(46.646858, 15.209175, 'RADLY');
	fixes.airway.RASTA = fix(47.495428, 13.381367, 'RASTA');
	fixes.airway.RATGO = fix(46.546183, 16.037028, 'RATGO');
	fixes.airway.REDBU = fix(47.955886, 12.818228, 'REDBU');
	fixes.airway.REKTI = fix(46.584539, 13.897447, 'REKTI');
	fixes.airway.RENKA = fix(48.584842, 13.505225, 'RENKA');
	fixes.airway.RONAG = fix(46.779414, 10.259011, 'RONAG');
	fixes.airway.ROPAG = fix(47.213622, 15.799367, 'ROPAG');
	fixes.airway.ROTAX = fix(47.977450, 12.384081, 'ROTAX');
	fixes.airway.SASAL = fix(47.284828, 16.474317, 'SASAL');
	fixes.airway.SIMBA = fix(48.230153, 13.015817, 'SIMBA');
	fixes.airway.SIRDU = fix(47.254650, 17.331822, 'SIRDU');
	fixes.airway.SITNI = fix(48.054228, 14.834614, 'SITNI');
	fixes.airway.SOGMO = fix(46.610358, 17.684228, 'SOGMO');
	fixes.airway.SOGTU = fix(46.519925, 14.365719, 'SOGTU');
	fixes.airway.SOTOV = fix(46.943864, 11.210433, 'SOTOV');
	fixes.airway.STEIN = fix(47.427614, 16.599708, 'STEIN');
	fixes.airway.SUBEN = fix(48.436422, 13.336711, 'SUBEN');
	fixes.airway.SUBES = fix(47.421222, 17.426556, 'SUBES');
	fixes.airway.SUDEN = fix(48.529167, 09.462222, 'SUDEN');
	fixes.airway.SUDUX = fix(46.945014, 11.008681, 'SUDUX');
	fixes.airway.SUNIS = fix(47.141878, 16.349611, 'SUNIS');
	fixes.airway.TAGAS = fix(48.043986, 15.653972, 'TAGAS');
	fixes.airway.TEDRA = fix(47.062872, 13.783714, 'TEDRA');
	fixes.airway.TEKNO = fix(47.623775, 17.408908, 'TEKNO');
	fixes.airway.TEKSI = fix(48.690556, 10.068056, 'TEKSI');
	fixes.airway.TIRUL = fix(47.057175, 10.528708, 'TIRUL');
	fixes.airway.TISAX = fix(46.645278, 11.065000, 'TISAX');
	fixes.airway.TISIS = fix(47.004578, 13.576275, 'TISIS');
	fixes.airway.TISKO = fix(46.682494, 15.991908, 'TISKO');
	fixes.airway.TITIG = fix(48.058889, 12.559444, 'TITIG');
	fixes.airway.TIVAP = fix(48.729097, 14.393953, 'TIVAP');
	fixes.airway.TOBAD = fix(47.732714, 12.208197, 'TOBAD');
	fixes.airway.TOBSO = fix(47.016117, 11.857597, 'TOBSO');
	fixes.airway.TOVKA = fix(48.270156, 16.926322, 'TOVKA');
	fixes.airway.TISKO = fix(46.682494, 15.991908, 'TISKO');
	fixes.airway.TITIG = fix(48.058889, 12.559444, 'TITIG');
	fixes.airway.TIVAP = fix(48.729097, 14.393953, 'TIVAP');
	fixes.airway.TOBAD = fix(47.732714, 12.208197, 'TOBAD');
	fixes.airway.TOBSO = fix(47.016117, 11.857597, 'TOBSO');
	fixes.airway.TOVKA = fix(48.270156, 16.926322, 'TOVKA');
	fixes.airway.TRAUN = fix(47.974722, 12.587500, 'TRAUN');
	fixes.airway.TUKDI = fix(47.01135,  15.715367, 'TUKDI');
	fixes.airway.TULSI = fix(47.701608, 11.788758, 'TULSI');
	fixes.airway.TUMPO = fix(48.434825, 16.321111, 'TUMPO');
	fixes.airway.TUNUM = fix(47.254125, 11.507592, 'TUNUM');
	fixes.airway.TUTAL = fix(46.950767, 11.069231, 'TUTAL');
	fixes.airway.UBUXI = fix(47.873419, 16.735817, 'UBUXI');
	fixes.airway.UMBIL =  fix(0.005833,  95.010000, 'UMBIL');
	fixes.airway.UMVEG = fix(47.211619, 11.896572, 'UMVEG');
	fixes.airway.UNIMI =  fix(0.014167,  79.000833, 'UNIMI');
	fixes.airway.UNKEN = fix(47.821783, 12.600997, 'UNKEN');
	fixes.airway.URAVA = fix(46.416181, 13.532306, 'URAVA');
	fixes.airway.VALIK = fix(48.155836, 15.914522, 'VALIK');
	fixes.airway.VATAL = fix(47.188561, 12.607997, 'VATAL');
	fixes.airway.VATET = fix(47.600953, 14.033119, 'VATET');
	fixes.airway.VAVOR = fix(47.934167, 12.154547, 'VAVOR');
	fixes.airway.VAXIS = fix(47.099725, 13.630803, 'VAXIS');
	fixes.airway.VEKEN = fix(46.563619, 13.379444, 'VEKEN');
	fixes.airway.VELOM = fix(48.221100, 13.499408, 'VELOM');
	fixes.airway.VENEN = fix(48.566553, 14.541344, 'VENEN');
	fixes.airway.VESAL = fix(46.390000, 11.716389, 'VESAL');
	fixes.airway.XANUT = fix(47.116269, 15.911881, 'XANUT');
	fixes.airway.XEBIX = fix(47.400011, 10.479875, 'XEBIX');
                                      
    /*var route = function(type, path) {
        var options = colors[type];   
        var path2 = [];               
        path.forEach(function(e, i) { 
            if (e == undefined) {     
                console.log("Waypoint missing: "+i);
            } else if (e.getPosition) {
                path2.push(e.getPosition())
            } else {                  
                path2.push(e);        
            }                         
        });                           
        options.path = path2;         
        options.map = map;            
        return new google.maps.Polyline(options);
    };                                
    var routes = { app: {}, star: {}, starterm: {}, sid: {}, sidterm: {}, airway: {}, transit: {}, holding: {}, center: {} };
	                                  
    routes.airway.Q100 = route('airway', [fixes.airway.RASTA, fixes.airway.NOKDA, fixes.airway.ARNOS]);
	routes.airway.UL25 = route('airway', [fixes.airway.BERTA, fixes.airway.SOGTU, fixes.airway.NEVAG, fixes.airway.TISIS, fixes.airway.VATAL]);
    routes.airway.UM138 = route('airway', [fixes.airway.TOVKA, fixes.airway.GUKTU, fixes.airway.SOLLENAU, fixes.airway.PUBEG, fixes.airway.ABRUK]);
    routes.airway.UM867 = route('airway', [fixes.airway.LOMRO, fixes.airway.NOKDA, fixes.airway.REKTI, fixes.airway.NIPEL]);
	routes.airway.UM984 = route('airway', [fixes.airway.MIKOV, fixes.airway.STOCKERAU, fixes.airway.TAGAS, fixes.airway.ABRUK, fixes.airway.VAXIS, fixes.airway.DETSA]);
    routes.airway.UM985 = route('airway', [fixes.airway.MALUG, fixes.airway.ELKAT, fixes.airway.NIMDU, fixes.airway.ASKOD, fixes.airway.UBUXI, fixes.airway.ABLOM]);
    routes.airway.UQ985 = route('airway', [fixes.airway.MALUG, fixes.airway.NEDSO, fixes.airway.ABLOM]);*/
})();                                 