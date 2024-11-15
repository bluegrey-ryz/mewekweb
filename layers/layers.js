ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.361897, -7.411609, 109.374851, -7.404322]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: false,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_batasdesa_2 = new ol.format.GeoJSON();
var features_batasdesa_2 = format_batasdesa_2.readFeatures(json_batasdesa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_batasdesa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasdesa_2.addFeatures(features_batasdesa_2);
var lyr_batasdesa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasdesa_2, 
                style: style_batasdesa_2,
                popuplayertitle: "batasdesa",
                interactive: true,
    title: 'batasdesa<br />\
    <img src="styles/legend/batasdesa_2_0.png" /> RT 01 RW 01<br />\
    <img src="styles/legend/batasdesa_2_1.png" /> RT 01 RW 02<br />\
    <img src="styles/legend/batasdesa_2_2.png" /> RT 01 RW 03<br />\
    <img src="styles/legend/batasdesa_2_3.png" /> RT 02 RW 01<br />\
    <img src="styles/legend/batasdesa_2_4.png" /> Rt 02 Rw 02<br />\
    <img src="styles/legend/batasdesa_2_5.png" /> RT 02 RW 03<br />\
    <img src="styles/legend/batasdesa_2_6.png" /> RT 03 RW 01<br />\
    <img src="styles/legend/batasdesa_2_7.png" /> RT 03 RW 03<br />\
    <img src="styles/legend/batasdesa_2_8.png" /> RT 04 RW 01<br />\
    <img src="styles/legend/batasdesa_2_9.png" /> <br />'
        });
var format_ptbangunan_3 = new ol.format.GeoJSON();
var features_ptbangunan_3 = format_ptbangunan_3.readFeatures(json_ptbangunan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ptbangunan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ptbangunan_3.addFeatures(features_ptbangunan_3);
var lyr_ptbangunan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ptbangunan_3, 
                style: style_ptbangunan_3,
                popuplayertitle: "ptbangunan",
                interactive: true,
                title: '<img src="styles/legend/ptbangunan_3.png" /> ptbangunan'
            });
var format_Mewek_Poly_4 = new ol.format.GeoJSON();
var features_Mewek_Poly_4 = format_Mewek_Poly_4.readFeatures(json_Mewek_Poly_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mewek_Poly_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mewek_Poly_4.addFeatures(features_Mewek_Poly_4);
var lyr_Mewek_Poly_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mewek_Poly_4, 
                style: style_Mewek_Poly_4,
                popuplayertitle: "Mewek_Poly",
                interactive: false,
                title: '<img src="styles/legend/Mewek_Poly_4.png" /> Mewek_Poly'
            });
var format_Lapangan_5 = new ol.format.GeoJSON();
var features_Lapangan_5 = format_Lapangan_5.readFeatures(json_Lapangan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lapangan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_5.addFeatures(features_Lapangan_5);
var lyr_Lapangan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_5, 
                style: style_Lapangan_5,
                popuplayertitle: "Lapangan",
                interactive: true,
                title: '<img src="styles/legend/Lapangan_5.png" /> Lapangan'
            });
var format_sawah_6 = new ol.format.GeoJSON();
var features_sawah_6 = format_sawah_6.readFeatures(json_sawah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_sawah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah_6.addFeatures(features_sawah_6);
var lyr_sawah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawah_6, 
                style: style_sawah_6,
                popuplayertitle: "sawah",
                interactive: true,
                title: '<img src="styles/legend/sawah_6.png" /> sawah'
            });
var format_warungmakan_7 = new ol.format.GeoJSON();
var features_warungmakan_7 = format_warungmakan_7.readFeatures(json_warungmakan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_warungmakan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_warungmakan_7.addFeatures(features_warungmakan_7);
var lyr_warungmakan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_warungmakan_7, 
                style: style_warungmakan_7,
                popuplayertitle: "warung makan",
                interactive: true,
                title: '<img src="styles/legend/warungmakan_7.png" /> warung makan'
            });
var format_kantor_8 = new ol.format.GeoJSON();
var features_kantor_8 = format_kantor_8.readFeatures(json_kantor_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_kantor_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kantor_8.addFeatures(features_kantor_8);
var lyr_kantor_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kantor_8, 
                style: style_kantor_8,
                popuplayertitle: "kantor",
                interactive: true,
                title: '<img src="styles/legend/kantor_8.png" /> kantor'
            });
var format_shop_9 = new ol.format.GeoJSON();
var features_shop_9 = format_shop_9.readFeatures(json_shop_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_shop_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shop_9.addFeatures(features_shop_9);
var lyr_shop_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shop_9, 
                style: style_shop_9,
                popuplayertitle: "shop",
                interactive: true,
                title: '<img src="styles/legend/shop_9.png" /> shop'
            });
var format_kos_10 = new ol.format.GeoJSON();
var features_kos_10 = format_kos_10.readFeatures(json_kos_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_kos_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kos_10.addFeatures(features_kos_10);
var lyr_kos_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kos_10, 
                style: style_kos_10,
                popuplayertitle: "kos",
                interactive: true,
                title: '<img src="styles/legend/kos_10.png" /> kos'
            });
var format_sekolah_11 = new ol.format.GeoJSON();
var features_sekolah_11 = format_sekolah_11.readFeatures(json_sekolah_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_sekolah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sekolah_11.addFeatures(features_sekolah_11);
var lyr_sekolah_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sekolah_11, 
                style: style_sekolah_11,
                popuplayertitle: "sekolah",
                interactive: true,
                title: '<img src="styles/legend/sekolah_11.png" /> sekolah'
            });
var format_rumahh_12 = new ol.format.GeoJSON();
var features_rumahh_12 = format_rumahh_12.readFeatures(json_rumahh_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rumahh_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumahh_12.addFeatures(features_rumahh_12);
var lyr_rumahh_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumahh_12, 
                style: style_rumahh_12,
                popuplayertitle: "rumahh",
                interactive: true,
                title: '<img src="styles/legend/rumahh_12.png" /> rumahh'
            });
var format_Makam_13 = new ol.format.GeoJSON();
var features_Makam_13 = format_Makam_13.readFeatures(json_Makam_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Makam_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Makam_13.addFeatures(features_Makam_13);
var lyr_Makam_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Makam_13, 
                style: style_Makam_13,
                popuplayertitle: "Makam",
                interactive: true,
                title: '<img src="styles/legend/Makam_13.png" /> Makam'
            });
var format_PT_14 = new ol.format.GeoJSON();
var features_PT_14 = format_PT_14.readFeatures(json_PT_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PT_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PT_14.addFeatures(features_PT_14);
var lyr_PT_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PT_14, 
                style: style_PT_14,
                popuplayertitle: "PT",
                interactive: true,
                title: '<img src="styles/legend/PT_14.png" /> PT'
            });
var format_Religion_15 = new ol.format.GeoJSON();
var features_Religion_15 = format_Religion_15.readFeatures(json_Religion_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Religion_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Religion_15.addFeatures(features_Religion_15);
var lyr_Religion_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Religion_15, 
                style: style_Religion_15,
                popuplayertitle: "Religion",
                interactive: true,
                title: '<img src="styles/legend/Religion_15.png" /> Religion'
            });
var format_sungai_16 = new ol.format.GeoJSON();
var features_sungai_16 = format_sungai_16.readFeatures(json_sungai_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_sungai_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_16.addFeatures(features_sungai_16);
var lyr_sungai_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_16, 
                style: style_sungai_16,
                popuplayertitle: "sungai",
                interactive: true,
                title: '<img src="styles/legend/sungai_16.png" /> sungai'
            });
var format_Jalandesa_17 = new ol.format.GeoJSON();
var features_Jalandesa_17 = format_Jalandesa_17.readFeatures(json_Jalandesa_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Jalandesa_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalandesa_17.addFeatures(features_Jalandesa_17);
var lyr_Jalandesa_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalandesa_17, 
                style: style_Jalandesa_17,
                popuplayertitle: "Jalandesa",
                interactive: true,
                title: '<img src="styles/legend/Jalandesa_17.png" /> Jalandesa'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_batasdesa_2.setVisible(true);lyr_ptbangunan_3.setVisible(true);lyr_Mewek_Poly_4.setVisible(true);lyr_Lapangan_5.setVisible(true);lyr_sawah_6.setVisible(true);lyr_warungmakan_7.setVisible(true);lyr_kantor_8.setVisible(true);lyr_shop_9.setVisible(true);lyr_kos_10.setVisible(true);lyr_sekolah_11.setVisible(true);lyr_rumahh_12.setVisible(true);lyr_Makam_13.setVisible(true);lyr_PT_14.setVisible(true);lyr_Religion_15.setVisible(true);lyr_sungai_16.setVisible(true);lyr_Jalandesa_17.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_batasdesa_2,lyr_ptbangunan_3,lyr_Mewek_Poly_4,lyr_Lapangan_5,lyr_sawah_6,lyr_warungmakan_7,lyr_kantor_8,lyr_shop_9,lyr_kos_10,lyr_sekolah_11,lyr_rumahh_12,lyr_Makam_13,lyr_PT_14,lyr_Religion_15,lyr_sungai_16,lyr_Jalandesa_17];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_batasdesa_2.set('fieldAliases', {'id': 'id', 'nama rw': 'nama rw', });
lyr_ptbangunan_3.set('fieldAliases', {'id': 'id', 'namapt': 'namapt', });
lyr_Mewek_Poly_4.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'Jenis': 'Jenis', });
lyr_Lapangan_5.set('fieldAliases', {'id': 'id', 'namalap': 'namalap', });
lyr_sawah_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_warungmakan_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_kantor_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'type': 'type', });
lyr_shop_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_kos_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_sekolah_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'type': 'type', });
lyr_rumahh_12.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'Jumlah KK': 'Jumlah KK', });
lyr_Makam_13.set('fieldAliases', {'id': 'id', 'Namamakam': 'Namamakam', });
lyr_PT_14.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'type': 'type', });
lyr_Religion_15.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'type': 'type', });
lyr_sungai_16.set('fieldAliases', {'id': 'id', 'namasungai': 'namasungai', });
lyr_Jalandesa_17.set('fieldAliases', {'id': 'id', 'namajln': 'namajln', 'lebar': 'lebar', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_batasdesa_2.set('fieldImages', {'id': 'TextEdit', 'nama rw': 'TextEdit', });
lyr_ptbangunan_3.set('fieldImages', {'id': '', 'namapt': '', });
lyr_Mewek_Poly_4.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_Lapangan_5.set('fieldImages', {'id': 'TextEdit', 'namalap': 'TextEdit', });
lyr_sawah_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_warungmakan_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_kantor_8.set('fieldImages', {'id': '', 'nama': '', 'type': '', });
lyr_shop_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_kos_10.set('fieldImages', {'id': '', 'nama': '', });
lyr_sekolah_11.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'type': 'TextEdit', });
lyr_rumahh_12.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'Jumlah KK': 'TextEdit', });
lyr_Makam_13.set('fieldImages', {'id': 'TextEdit', 'Namamakam': 'TextEdit', });
lyr_PT_14.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'type': 'TextEdit', });
lyr_Religion_15.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'type': 'TextEdit', });
lyr_sungai_16.set('fieldImages', {'id': 'TextEdit', 'namasungai': 'TextEdit', });
lyr_Jalandesa_17.set('fieldImages', {'id': 'TextEdit', 'namajln': 'TextEdit', 'lebar': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_batasdesa_2.set('fieldLabels', {'id': 'no label', 'nama rw': 'no label', });
lyr_ptbangunan_3.set('fieldLabels', {'id': 'no label', 'namapt': 'no label', });
lyr_Mewek_Poly_4.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'name': 'no label', 'Jenis': 'no label', });
lyr_Lapangan_5.set('fieldLabels', {'id': 'no label', 'namalap': 'no label', });
lyr_sawah_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_warungmakan_7.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_kantor_8.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'type': 'no label', });
lyr_shop_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_kos_10.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_sekolah_11.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', 'type': 'no label', });
lyr_rumahh_12.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', 'Jumlah KK': 'inline label - always visible', });
lyr_Makam_13.set('fieldLabels', {'id': 'no label', 'Namamakam': 'no label', });
lyr_PT_14.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - visible with data', 'type': 'inline label - visible with data', });
lyr_Religion_15.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'type': 'no label', });
lyr_sungai_16.set('fieldLabels', {'id': 'no label', 'namasungai': 'inline label - always visible', });
lyr_Jalandesa_17.set('fieldLabels', {'id': 'no label', 'namajln': 'inline label - always visible', 'lebar': 'no label', });
lyr_Jalandesa_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});