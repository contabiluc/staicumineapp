/* -------------------------------------------------------------
   Staicumine Mood Tracker - Application Logic
------------------------------------------------------------- */

// Internationalization (i18n) - Bilingual Support (RO / EN)
const TRANSLATIONS = {
    ro: {
        app_title: "Staicumine",
        tab_title_dashboard: "Acasă",
        tab_sub_dashboard: "Monitorizează-ți starea. Înțelege-ți tiparele.",
        tab_title_log: "Check-in",
        tab_sub_log: "Urmărește-ți dispoziția, somnul și factorii care îți influențează starea.",
        tab_title_history: "Istoric",
        tab_sub_history: "Revizuiește toate înregistrările tale și observă dinamica emoțională.",
        tab_title_safety: "Plan de siguranță",
        tab_sub_safety: "Strategii personale și resurse de suport în caz de criză.",
        tab_title_settings: "Date & setări",
        tab_sub_settings: "Exportă, importă sau șterge datele stocate exclusiv în browser.",
        tab_title_guides: "Resurse",
        tab_sub_guides: "Recomandări bazate pe dovezi științifice pentru calmarea anxietății, somn odihnitor și echilibru emotiv.",

        nav_crisis: "Am nevoie de ajutor",
        nav_dashboard: "Acasă",
        nav_log: "Check-in",
        nav_safety: "Plan de siguranță",
        nav_history: "Istoric",
        nav_guides: "Resurse",
        nav_settings: "Date & setări",
        privacy_badge: "Date stocate local 100%",

        step1_title: "Cum te-ai simțit astăzi?",
        step1_sub: "Alege nivelul care descrie cel mai bine starea ta.",
        step2_title: "Cum ai dormit?",
        step2_sub: "Cât ai dormit noaptea trecută?",
        step3_title: "Cum te simți fizic?",
        step3_sub: "Urmărește nivelul de anxietate și energie.",
        step3_anxiety_label: "Nivel de anxietate",
        step3_energy_label: "Nivel de energie",
        step4_title: "Ai observat ceva astăzi?",
        step4_sub: "Selectează stările sau simptomele trăite.",
        step5_med_title: "Tratament",
        step5_med_label: "Am urmat tratamentul prescris astăzi",
        step6_notes_title: "Ce a influențat starea ta astăzi?",
        submit_btn_save: "Salvează check-in-ul",
        submit_btn_update: "Actualizează check-in-ul",
        btn_cancel: "Renunță",
        guide_btn: "Ghid",

        mood_m5: "Depresie Severă",
        mood_m5_sub: "-5 • Tristețe copleșitoare",
        mood_m3: "Depresie Moderată",
        mood_m3_sub: "-3 • Retragere & oboseală",
        mood_m1: "Depresie Ușoară",
        mood_m1_sub: "-1 • Ușor sub echilibru",
        mood_0: "Echilibrat / Stabil",
        mood_0_sub: "0 • Liniștit & în pace",
        mood_p1: "Hipomanie Ușoară",
        mood_p1_sub: "+1 • Optimist & energic",
        mood_p3: "Manie Moderată",
        mood_p3_sub: "+3 • Hiperactiv & vorbăreț",
        mood_p5: "Manie Severă",
        mood_p5_sub: "+5 • Impulsiv & agitat",

        stat_mood_title: "Starea ta",
        stat_sleep_title: "Somn",
        stat_anxiety_title: "Anxietate",
        stat_energy_title: "Energie",
        stat_no_data: "Fără date",

        settings_lang_title: "Limbă / Language",
        settings_lang_desc: "Selectează limba în care dorești să utilizezi aplicația Staicumine.",
        settings_data_title: "Gestionarea Datelor Tale",
        settings_data_desc: "Toate datele introduse în această aplicație sunt stocate în mod exclusiv în browser-ul tău local (prin intermediul API-ului localStorage). Nimic nu este trimis către niciun server extern, asigurându-ți intimitate absolută.",
        settings_export_title: "Exportă Datele (Backup)",
        settings_export_desc: "Descarcă toate înregistrările tale și planul de siguranță într-un fișier securizat JSON.",
        settings_export_btn: "Exportă ca JSON",
        settings_import_title: "Importă Datele",
        settings_import_desc: "Încarcă un backup realizat anterior pentru a restaura istoricul stărilor tale.",
        settings_import_btn: "Alege Fișier JSON",
        settings_danger_title: "Zona de Pericol",
        settings_danger_desc: "Șterge definitiv toate datele din browser-ul curent. Această acțiune este ireversibilă!",
        settings_danger_btn: "Șterge Toate Datele",

        symptom_iritabilitate: "Iritabilitate",
        symptom_ganduri_accelerate: "Gânduri accelerate",
        symptom_agitatie_motorie: "Agitație motorie",
        symptom_tristete: "Tristețe / Plâns",
        symptom_lipsa_concentrare: "Lipsă de concentrare",
        symptom_retragere_sociala: "Retragere socială",
        symptom_atac_panica: "Atac de panică",
        symptom_impulsivitate: "Impulsivitate",

        // Chart container & Metrics (/html/body/div[7]/main/section[1]/div[4])
        chart_title_mood: "Evoluția dispoziției",
        chart_sub_mood: "Scară calibrată: -5 (Depresie) la +5 (Manie)",
        chart_title_sleep: "Ore de somn",
        chart_sub_sleep: "Scară calibrată: 0 la 16 ore (Zona optimă 6.5h - 9h)",
        chart_title_anxiety: "Nivel de anxietate",
        chart_sub_anxiety: "Scară calibrată: 0 (Scăzută) la 10 (Severă)",
        chart_title_energy: "Nivel de energie",
        chart_sub_energy: "Scară calibrată: 0 (Scăzută) la 10 (Foarte bună)",
        chart_title_all: "Toți indicatorii suprapuși",
        chart_sub_all: "Urmărire comparativă pe scară procentuală normalizată",

        metric_mood: "Dispoziție",
        metric_sleep: "Somn",
        metric_anxiety: "Anxietate",
        metric_energy: "Energie",
        metric_all: "Toate",

        filter_7_days: "7 Zile",
        filter_30_days: "30 Zile",
        filter_90_days: "90 Zile",

        chart_empty_title: "Începe să-ți urmărești evoluția",
        chart_empty_desc: "Completează primul check-in pentru a vedea aici evoluția dispoziției, somnului și anxietății.",
        chart_empty_cta: "Fă primul check-in",

        legend_mood: "Dispoziție (-5 la +5)",
        legend_stability: "Linia de Stabilitate (0)",
        legend_sleep: "Ore Somn (0-16h)",
        legend_sleep_optimal: "Zona optimă de somn (6.5h - 9h)",
        legend_anxiety: "Anxietate (0-10)",
        legend_comfort_zone: "Zona de confort (0-3)",
        legend_energy: "Energie (0-10)",

        chart_axis_stable: "0 (Stabil)",
        chart_placeholder: "Adăugați înregistrări pentru grafic",

        // Hero Card & Banner
        hero_greeting: "Bună! 👋",
        hero_how_feeling: "Cum te simți astăzi?",
        hero_hint_duration: "Primul tău check-in durează aproximativ 30 de secunde.",
        hero_start_first: "Începe primul check-in",
        hero_log_today: "Fă check-in-ul de azi",
        hero_completed_sub: "Ai completat check-in-ul pentru astăzi.",
        hero_completed_badge: "✓ Check-in complet pentru azi",
        hero_edit_btn: "Editează",

        demo_banner_text: "Vizualizezi <strong>date demo</strong> &mdash; acestea nu sunt datele tale reale.",
        demo_banner_btn: "Șterge demo și începe",

        // Stat descriptors
        stat_mood_stable: "Echilibrat",
        stat_mood_very_high: "Stare foarte ridicată",
        stat_mood_elevated: "Elevată",
        stat_mood_slightly_high: "Ușor ridicată",
        stat_mood_severe_dep: "Depresie severă",
        stat_mood_difficult: "Dificilă",
        stat_mood_slightly_low: "Ușor scăzută",

        stat_sleep_good: "Bun",
        stat_sleep_low: "Scăzut",
        stat_sleep_too_long: "Prea lung",

        stat_anxiety_low: "Scăzută",
        stat_anxiety_high: "Ridicată",
        stat_anxiety_moderate: "Moderată",

        stat_energy_good: "Bună",
        stat_energy_very_high: "Foarte ridicată",
        stat_energy_low: "Scăzută",

        // Insights & Summary
        insights_title: "Ce observăm",
        insights_sub: "Tipare și asocieri descoperite în datele tale",
        summary_title: "Rezumat",
        summary_lbl_checkins: "Check-in-uri",
        summary_lbl_sleep: "Somn mediu",
        summary_lbl_anxiety: "Anxietate",
        summary_lbl_mood: "Evoluție dispoziție",
        summary_footer_comparison: "📊 Comparativ cu perioada precedentă",
        insights_collecting_title: "Colectăm mai multe date",
        insights_collecting_desc: "Secțiunea <strong>„Ce observăm”</strong> se activează după <strong>3 check-in-uri</strong> pentru a-ți arăta primele observații. Continuă să-ți înregistrezi starea zi de zi!",
        badge_preliminary: "🌱 Observație preliminară",
        badge_pattern: "📊 Tipar preliminar",
        badge_trend: "🌟 Tendință consistentă",
        insights_based_on: "🔎 Bazat pe {count} check-in-uri",
        insights_balanced_title: "Stare generală echilibrată",
        insights_balanced_desc: "Nu am identificat fluctuații sau asocieri marcante în datele tale recente. Continuă check-in-urile zilnice!",
        backup_banner_text: "🔒 Datele sunt stocate local. <a href=\"#\" onclick=\"exportData(); return false;\" class=\"backup-link\">Exportă un backup</a> pentru a evita pierderea lor.",
        dashboard_privacy_footer: "🔒 Datele tale sunt stocate 100% local pe dispozitivul tău.",

        // Check-in form (/html/body/div[7]/main/section[2]/div/div/div)
        checkin_header_title: "Înregistrează starea de azi",
        checkin_header_title_edit: "Editează check-in-ul",
        checkin_header_sub: "Completează câteva informații despre dispoziție, somn și cum te-ai simțit.",
        checkin_time_badge: "⚡ Check-in ~ 45 sec",
        checkin_date_label: "Data check-in-ului",
        checkin_date_warning: "⚠️ Ai deja un check-in salvat pentru această dată. Trimiterea va actualiza înregistrarea existentă.",
        mood_guide_title: "Ghid de Autoevaluare (Axa Dispoziției)",
        mood_guide_m5: "<strong>+5 (Manie Severă):</strong> Energie extremă, impulsivitate ridicată, somn sub 3h.",
        mood_guide_m3: "<strong>+3 (Manie Mod.):</strong> Hiperactiv, foarte vorbăreț, iritabilitate crescută.",
        mood_guide_m1: "<strong>+1 (Hipomanie):</strong> Stare foarte bună de spirit, optimism, productivitate.",
        mood_guide_0: "<strong>0 (Stabil / Eutimic):</strong> Echilibru emoțional normal, stare calmă.",
        mood_guide_d1: "<strong>-1 (Depresie Ușoară):</strong> Tristețe trecătoare, oboseală moderată.",
        mood_guide_d3: "<strong>-3 (Depresie Mod.):</strong> Retragere socială, plâns facil, energie scăzută.",
        mood_guide_d5: "<strong>-5 (Depresie Severă):</strong> Imposibilitate de funcționare. (Cere ajutor!)",
        journal_notes_placeholder: "Ai observat ceva care ți-a influențat starea? Poate fi stres, conflicte, cafea, lipsă de somn, muncă etc.",
        slider_hours: "ore",
        slider_hour_singular: "oră",
        anxiety_extreme: "Extremă",
        anxiety_severe: "Severă",
        anxiety_moderate: "Moderată",
        anxiety_tolerable: "Tolerabilă",
        anxiety_low: "Scăzută",
        energy_very_high: "Foarte bună",
        energy_good: "Bună",
        energy_moderate: "Moderată",
        energy_low: "Scăzută",
        energy_very_low: "Foarte scăzută",
        draft_saved_notice: "💾 Draft salvat automat",

        // Safety Plan (/html/body/div[7]/main/section[3] #view-safety)
        safety_header_title: "Plan de Siguranță & Prevenire a Crizei",
        safety_header_desc: "Acest plan este salvat doar în browserul tău. Completează-l pentru a-l avea la îndemână în momentele dificile. În caz de urgență majoră, apelează imediat serviciile de urgență.",
        safety_crisis_lines_title: "Linii Naționale de Criză (România)",
        safety_line_112_title: "112 - Serviciul de Urgență",
        safety_line_112_desc: "Pentru amenințări imediate la adresa vieții sau siguranței fizice.",
        safety_line_112_btn: "Sună 112",
        safety_line_depre_title: "0374 456 420 - Depre Hub Helpline",
        safety_line_depre_desc: "Suport emoțional gratuit, disponibil 24/7 pentru anxietate, atac de panică și depresie.",
        safety_line_depre_btn: "Sună Helpline",
        safety_line_antisuicide_title: "0800 801 200 - Linia Verde Antisuicide",
        safety_line_antisuicide_desc: "Alianța Română de Prevenție a Suicidului (ore specifice / suport gratuit).",
        safety_line_antisuicide_btn: "Sună Alianța",

        safety_contacts_title: "Persoane de Contact de Încredere",
        safety_doc_label: "Medic Psihiatru (Nume & Telefon)",
        safety_doc_ph: "Dr. Andrei Popescu - 07xx xxx xxx",
        safety_therapist_label: "Psiholog / Terapeut",
        safety_therapist_ph: "Ioana Ionescu - 07xx xxx xxx",
        safety_emergency_label: "Prieten de încredere / Membru familie",
        safety_emergency_ph: "Mama / Partener - 07xx xxx xxx",
        safety_save_contacts_btn: "Salvează Contactele",

        safety_strategies_title: "Strategii de Calmare & Coping",
        safety_triggers_label: "Semnale de alarmă (Triggers / Schimbări de comportament):",
        safety_triggers_ph: "Ex: Nu mai pot dormi, devin extrem de iritabil, vorbesc foarte repede.",
        safety_coping_label: "Măsuri rapide de calmare (Ce funcționează pentru mine):",
        safety_coping_ph: "Ex: Exercițiul de respirație 4-7-8, ascult playlist-ul de relaxare, merg la o plimbare scurtă fără telefon.",
        safety_save_strategies_btn: "Salvează Strategiile",

        safety_breathing_title: "Respirație Ghidată (Metoda 4-7-8)",
        safety_breathing_badge: "⏱ 2 minute",
        safety_breathing_when: "Când să o folosești:",
        safety_breathing_pill1: "• Anxietate & Panică",
        safety_breathing_pill2: "• Tensiune & Agitație",
        safety_breathing_pill3: "• Înainte de somn",
        safety_breathing_start_btn: "🫁 Începe exercițiul",
        safety_breathing_stop_btn: "Oprește Respirația",
        safety_breathing_ready: "Pregătit?",
        safety_breathing_inhale: "Inspiră adânc...",
        safety_breathing_hold: "Menține aerul...",
        safety_breathing_exhale: "Expiră lent pe gură...",
        safety_breathing_theory_title: "Cum funcționează & Pași tehnici",
        safety_breathing_theory_desc: "Tehnica 4-7-8 stimulează nervul vag și activează sistemul nervos parasimpatic, scăzând ritmul cardiac și tensiunea arterială în aproximativ 120 de secunde.",
        safety_breathing_step1: "Inspiră pe nas (4 secunde)",
        safety_breathing_step2: "Menține aerul (7 secunde)",
        safety_breathing_step3: "Expiră lent pe gură (8 secunde)",

        safety_sugg_section_title: "Tehnici & Exerciții Rapide de Calmare",
        safety_sugg_section_desc: "Fiecare tehnică pune acțiunea pe primul loc. Apasă butonul de acțiune directă pentru a începe sau a adăuga tehnica în planul tău.",
        safety_sugg1_title: "Tehnica 5-4-3-2-1 de Împământare",
        safety_sugg1_badge: "⏱ 3 minute • Anxietate / Panică",
        safety_sugg_add_btn: "+ Adaugă la plan",
        safety_sugg_when_label: "Când să o folosești:",
        safety_sugg1_when: "Când te simți copleșit de gânduri de panică sau disociere.",
        safety_sugg_steps_label: "Pași:",
        safety_sugg1_steps: "Numește cu voce tare: 5 lucruri pe care le vezi, 4 pe care le poți atinge, 3 pe care le auzi, 2 pe care le miroși, 1 pe care îl guști.",
        safety_sugg1_add_content: "Tehnica 5-4-3-2-1: Numește 5 lucruri pe care le vezi, 4 pe care le atingi, 3 pe care le auzi, 2 pe care le miroși, 1 pe care îl guști.",
        safety_sugg2_title: "Descărcare Fizică & Distragere",
        safety_sugg2_badge: "⏱ 3 minute • Iritabilitate / Furie",
        safety_sugg2_when: "Pentru exces de energie mentală sau agitație iritabilă.",
        safety_sugg2_steps: "Scrie gândurile furioase pe o foaie și rupe-o, fă 10 genuflexiuni rapide sau dansează energic timp de 3 minute.",
        safety_sugg2_add_content: "Descărcare Fizică: Scrie gândurile furioase și rupe foaia, 10 genuflexiuni rapide, mișcare pe muzică energică.",

        // Safety Toasts & Feedback
        toast_safety_contacts_saved: "Contactele de încredere au fost salvate.",
        toast_safety_strategies_saved: "Strategiile de coping au fost salvate.",
        toast_suggestion_added: "Sugestia a fost adăugată la strategiile tale de calmare.",
        toast_suggestion_exists: "Această sugestie este deja în planul tău.",
        breathing_toast_started: "Exercițiul de respirație a început. Urmărește instrucțiunile.",
        breathing_toast_stopped: "Exercițiul de respirație a fost oprit.",

        // Crisis Help Modal
        crisis_modal_badge: "🆘 SUPORT IMEDIAT",
        crisis_modal_title: "Am nevoie de ajutor",
        crisis_modal_sub: "Ești în siguranță. Iată resursele tale rapide pentru acest moment.",
        crisis_trust_card_title: "Persoană de încredere",
        crisis_trust_not_set: "Neconfigurată în Planul de Siguranță",
        crisis_trust_call_btn: "📞 Sună acum",
        crisis_helpline_title: "Resurse de urgență 24/7 (România)",
        crisis_helpline_sub: "Linii telefonice gratuite și confidențiale",
        crisis_line_112_label: "Serviciul Național de Urgență",
        crisis_call_112_btn: "Sună 112 →",
        crisis_line_suicide_label: "Alianța Română de Prevenție a Suicidului (24/7)",
        crisis_call_btn: "Sună →",
        crisis_line_depre_label: "DepreHUB — Suport Anxietate & Depresie",
        crisis_exercise_title: "Exercițiu de calmare (Respirație 4-7-8)",
        crisis_exercise_sub: "Scade ritmul cardiac și atenuează anxietatea în 2 minute.",
        crisis_exercise_btn: "🫁 Începe Respirația Ghidată"
    },
    en: {
        app_title: "Staicumine",
        tab_title_dashboard: "Home",
        tab_sub_dashboard: "Track your mood. Understand your patterns.",
        tab_title_log: "Check-in",
        tab_sub_log: "Track your mood level, sleep duration, and factors influencing your day.",
        tab_title_history: "History",
        tab_sub_history: "Review all your past entries and observe emotional patterns.",
        tab_title_safety: "Safety Plan",
        tab_sub_safety: "Personal coping strategies and crisis support resources.",
        tab_title_settings: "Data & Settings",
        tab_sub_settings: "Export, import, or manage your locally stored data.",
        tab_title_guides: "Resources",
        tab_sub_guides: "Evidence-based guides for calming anxiety, restful sleep, and emotional balance.",

        nav_crisis: "I need help (SOS)",
        nav_dashboard: "Home",
        nav_log: "Check-in",
        nav_safety: "Safety Plan",
        nav_history: "History",
        nav_guides: "Resources",
        nav_settings: "Data & Settings",
        privacy_badge: "100% Locally Stored",

        step1_title: "How did you feel today?",
        step1_sub: "Choose the level that best describes your overall mood.",
        step2_title: "How did you sleep?",
        step2_sub: "Hours of sleep last night.",
        step3_title: "How do you feel physically?",
        step3_sub: "Track your anxiety and energy levels.",
        step3_anxiety_label: "Anxiety Level",
        step3_energy_label: "Energy Level",
        step4_title: "Did you notice anything today?",
        step4_sub: "Select the states or symptoms experienced.",
        step5_med_title: "Medication",
        step5_med_label: "I took my prescribed medication today",
        step6_notes_title: "What influenced your mood today?",
        submit_btn_save: "Save check-in",
        submit_btn_update: "Update check-in",
        btn_cancel: "Cancel",
        guide_btn: "Guide",

        mood_m5: "Severe Depression",
        mood_m5_sub: "-5 • Overwhelming sadness",
        mood_m3: "Moderate Depression",
        mood_m3_sub: "-3 • Withdrawal & fatigue",
        mood_m1: "Mild Depression",
        mood_m1_sub: "-1 • Slightly low",
        mood_0: "Balanced / Stable",
        mood_0_sub: "0 • Calm & peaceful",
        mood_p1: "Mild Hypomania",
        mood_p1_sub: "+1 • Optimistic & energetic",
        mood_p3: "Moderate Mania",
        mood_p3_sub: "+3 • Hyperactive & talkative",
        mood_p5: "Severe Mania",
        mood_p5_sub: "+5 • Impulsive & agitated",

        stat_mood_title: "Your Mood",
        stat_sleep_title: "Sleep",
        stat_anxiety_title: "Anxiety",
        stat_energy_title: "Energy",
        stat_no_data: "No data",

        settings_lang_title: "Language / Limbă",
        settings_lang_desc: "Select the language you want to use for Staicumine.",
        settings_data_title: "Managing Your Data",
        settings_data_desc: "All data entered in this application is stored exclusively in your local browser (using the localStorage API). Nothing is sent to any external server, guaranteeing total privacy.",
        settings_export_title: "Export Data (Backup)",
        settings_export_desc: "Download all your logs and safety plan into a secure JSON file.",
        settings_export_btn: "Export as JSON",
        settings_import_title: "Import Data",
        settings_import_desc: "Load a previously saved backup to restore your mood history.",
        settings_import_btn: "Choose JSON File",
        settings_danger_title: "Danger Zone",
        settings_danger_desc: "Permanently delete all data from this browser. This action cannot be undone!",
        settings_danger_btn: "Delete All Data",

        symptom_iritabilitate: "Irritability",
        symptom_ganduri_accelerate: "Racing thoughts",
        symptom_agitatie_motorie: "Motor agitation",
        symptom_tristete: "Sadness / Crying",
        symptom_lipsa_concentrare: "Lack of focus",
        symptom_retragere_sociala: "Social withdrawal",
        symptom_atac_panica: "Panic attack",
        symptom_impulsivitate: "Impulsivity",

        // Chart container & Metrics (/html/body/div[7]/main/section[1]/div[4])
        chart_title_mood: "Mood Evolution",
        chart_sub_mood: "Calibrated scale: -5 (Depression) to +5 (Mania)",
        chart_title_sleep: "Sleep Hours",
        chart_sub_sleep: "Calibrated scale: 0 to 16 hours (Optimal zone 6.5h - 9h)",
        chart_title_anxiety: "Anxiety Level",
        chart_sub_anxiety: "Calibrated scale: 0 (Low) to 10 (Severe)",
        chart_title_energy: "Energy Level",
        chart_sub_energy: "Calibrated scale: 0 (Low) to 10 (Very good)",
        chart_title_all: "All Metrics Overlaid",
        chart_sub_all: "Comparative tracking on normalized percentage scale",

        metric_mood: "Mood",
        metric_sleep: "Sleep",
        metric_anxiety: "Anxiety",
        metric_energy: "Energy",
        metric_all: "All",

        filter_7_days: "7 Days",
        filter_30_days: "30 Days",
        filter_90_days: "90 Days",

        chart_empty_title: "Start tracking your progress",
        chart_empty_desc: "Complete your first check-in to see your mood, sleep, and anxiety trends here.",
        chart_empty_cta: "Do first check-in",

        legend_mood: "Mood (-5 to +5)",
        legend_stability: "Stability Line (0)",
        legend_sleep: "Sleep Hours (0-16h)",
        legend_sleep_optimal: "Optimal sleep zone (6.5h - 9h)",
        legend_anxiety: "Anxiety (0-10)",
        legend_comfort_zone: "Comfort zone (0-3)",
        legend_energy: "Energy (0-10)",

        chart_axis_stable: "0 (Stable)",
        chart_placeholder: "Add entries for chart",

        // Hero Card & Banner
        hero_greeting: "Hello! 👋",
        hero_how_feeling: "How are you feeling today?",
        hero_hint_duration: "Your first check-in takes about 30 seconds.",
        hero_start_first: "Start first check-in",
        hero_log_today: "Log today's check-in",
        hero_completed_sub: "You have completed your check-in for today.",
        hero_completed_badge: "✓ Check-in complete for today",
        hero_edit_btn: "Edit",

        demo_banner_text: "You are viewing <strong>demo data</strong> &mdash; this is not your real data.",
        demo_banner_btn: "Clear demo and start",

        // Stat descriptors
        stat_mood_stable: "Balanced",
        stat_mood_very_high: "Very high mood",
        stat_mood_elevated: "Elevated",
        stat_mood_slightly_high: "Slightly high",
        stat_mood_severe_dep: "Severe depression",
        stat_mood_difficult: "Difficult",
        stat_mood_slightly_low: "Slightly low",

        stat_sleep_good: "Good",
        stat_sleep_low: "Low",
        stat_sleep_too_long: "Too long",

        stat_anxiety_low: "Low",
        stat_anxiety_high: "High",
        stat_anxiety_moderate: "Moderate",

        stat_energy_good: "Good",
        stat_energy_very_high: "Very high",
        stat_energy_low: "Low",

        // Insights & Summary
        insights_title: "What we observe",
        insights_sub: "Patterns and associations discovered in your data",
        summary_title: "Summary",
        summary_lbl_checkins: "Check-ins",
        summary_lbl_sleep: "Avg sleep",
        summary_lbl_anxiety: "Anxiety",
        summary_lbl_mood: "Mood trend",
        summary_footer_comparison: "📊 Compared to previous period",
        insights_collecting_title: "Collecting more data",
        insights_collecting_desc: "The <strong>“What we observe”</strong> section activates after <strong>3 check-ins</strong> to show your initial insights. Keep recording your daily state!",
        badge_preliminary: "🌱 Preliminary observation",
        badge_pattern: "📊 Preliminary pattern",
        badge_trend: "🌟 Consistent trend",
        insights_based_on: "🔎 Based on {count} check-ins",
        insights_balanced_title: "Overall balanced state",
        insights_balanced_desc: "No significant fluctuations or associations detected in your recent data. Keep logging daily!",
        backup_banner_text: "🔒 Data is stored locally. <a href=\"#\" onclick=\"exportData(); return false;\" class=\"backup-link\">Export a backup</a> to prevent data loss.",
        dashboard_privacy_footer: "🔒 Your data is stored 100% locally on your device.",

        // Check-in form (/html/body/div[7]/main/section[2]/div/div/div)
        checkin_header_title: "Log Today's Mood",
        checkin_header_title_edit: "Edit Check-in",
        checkin_header_sub: "Fill in details about your mood, sleep, and how you felt today.",
        checkin_time_badge: "⚡ Check-in ~ 45 sec",
        checkin_date_label: "Check-in Date",
        checkin_date_warning: "⚠️ You already have an entry saved for this date. Submitting will update it.",
        mood_guide_title: "Self-Assessment Guide (Mood Scale)",
        mood_guide_m5: "<strong>+5 (Severe Mania):</strong> Extreme energy, high impulsivity, sleep under 3h.",
        mood_guide_m3: "<strong>+3 (Mod. Mania):</strong> Hyperactive, very talkative, increased irritability.",
        mood_guide_m1: "<strong>+1 (Hypomania):</strong> Very good spirits, optimism, productivity.",
        mood_guide_0: "<strong>0 (Stable / Euthymic):</strong> Normal emotional balance, calm state.",
        mood_guide_d1: "<strong>-1 (Mild Depression):</strong> Passing sadness, moderate fatigue.",
        mood_guide_d3: "<strong>-3 (Mod. Depression):</strong> Social withdrawal, easy tears, low energy.",
        mood_guide_d5: "<strong>-5 (Severe Depression):</strong> Inability to function. (Seek help!)",
        journal_notes_placeholder: "Did you notice anything influencing your mood? Could be stress, conflicts, coffee, lack of sleep, work, etc.",
        slider_hours: "hours",
        slider_hour_singular: "hour",
        anxiety_extreme: "Extreme",
        anxiety_severe: "Severe",
        anxiety_moderate: "Moderate",
        anxiety_tolerable: "Tolerable",
        anxiety_low: "Low",
        energy_very_high: "Very high",
        energy_good: "Good",
        energy_moderate: "Moderate",
        energy_low: "Low",
        energy_very_low: "Very low",
        draft_saved_notice: "💾 Draft saved automatically",

        // Safety Plan (/html/body/div[7]/main/section[3] #view-safety)
        safety_header_title: "Safety & Crisis Prevention Plan",
        safety_header_desc: "This plan is stored only in your browser. Fill it in to have it on hand during difficult times. In case of a major emergency, call emergency services immediately.",
        safety_crisis_lines_title: "National Crisis Lines (Romania)",
        safety_line_112_title: "112 - Emergency Services",
        safety_line_112_desc: "For immediate threats to life or physical safety.",
        safety_line_112_btn: "Call 112",
        safety_line_depre_title: "0374 456 420 - Depre Hub Helpline",
        safety_line_depre_desc: "Free 24/7 emotional support for anxiety, panic attacks, and depression.",
        safety_line_depre_btn: "Call Helpline",
        safety_line_antisuicide_title: "0800 801 200 - Suicide Prevention Lifeline",
        safety_line_antisuicide_desc: "Romanian Alliance for Suicide Prevention (specific hours / free support).",
        safety_line_antisuicide_btn: "Call Lifeline",

        safety_contacts_title: "Trusted Contacts",
        safety_doc_label: "Psychiatrist (Name & Phone)",
        safety_doc_ph: "Dr. Andrei Popescu - 07xx xxx xxx",
        safety_therapist_label: "Psychologist / Therapist",
        safety_therapist_ph: "Ioana Ionescu - 07xx xxx xxx",
        safety_emergency_label: "Trusted Friend / Family Member",
        safety_emergency_ph: "Mom / Partner - 07xx xxx xxx",
        safety_save_contacts_btn: "Save Contacts",

        safety_strategies_title: "Calming & Coping Strategies",
        safety_triggers_label: "Warning Signs (Triggers / Behavioral Changes):",
        safety_triggers_ph: "E.g.: Can't sleep, feeling extremely irritable, talking very fast.",
        safety_coping_label: "Quick Calming Measures (What works for me):",
        safety_coping_ph: "E.g.: 4-7-8 breathing exercise, listening to calm playlist, short walk without phone.",
        safety_save_strategies_btn: "Save Strategies",

        safety_breathing_title: "Guided Breathing (4-7-8 Method)",
        safety_breathing_badge: "⏱ 2 minutes",
        safety_breathing_when: "When to use it:",
        safety_breathing_pill1: "• Anxiety & Panic",
        safety_breathing_pill2: "• Tension & Agitation",
        safety_breathing_pill3: "• Before sleep",
        safety_breathing_start_btn: "🫁 Start Exercise",
        safety_breathing_stop_btn: "Stop Exercise",
        safety_breathing_ready: "Ready?",
        safety_breathing_inhale: "Inhale deeply...",
        safety_breathing_hold: "Hold breath...",
        safety_breathing_exhale: "Exhale slowly through mouth...",
        safety_breathing_theory_title: "How It Works & Technical Steps",
        safety_breathing_theory_desc: "The 4-7-8 technique stimulates the vagus nerve and activates the parasympathetic nervous system, lowering heart rate and blood pressure in about 120 seconds.",
        safety_breathing_step1: "Inhale through nose (4 seconds)",
        safety_breathing_step2: "Hold your breath (7 seconds)",
        safety_breathing_step3: "Exhale slowly through mouth (8 seconds)",

        safety_sugg_section_title: "Quick Calming Techniques & Exercises",
        safety_sugg_section_desc: "Each technique puts action first. Click the direct action button to begin or add the technique to your plan.",
        safety_sugg1_title: "5-4-3-2-1 Grounding Technique",
        safety_sugg1_badge: "⏱ 3 minutes • Anxiety / Panic",
        safety_sugg_add_btn: "+ Add to Plan",
        safety_sugg_when_label: "When to use it:",
        safety_sugg1_when: "When feeling overwhelmed by panic thoughts or dissociation.",
        safety_sugg_steps_label: "Steps:",
        safety_sugg1_steps: "Name out loud: 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste.",
        safety_sugg1_add_content: "5-4-3-2-1 Technique: Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.",
        safety_sugg2_title: "Physical Release & Distraction",
        safety_sugg2_badge: "⏱ 3 minutes • Irritability / Anger",
        safety_sugg2_when: "For excess mental energy or irritable agitation.",
        safety_sugg2_steps: "Write angry thoughts on a sheet of paper and tear it up, do 10 quick squats, or dance vigorously for 3 minutes.",
        safety_sugg2_add_content: "Physical Release: Write angry thoughts and tear the sheet, 10 quick squats, move to upbeat music.",

        // Safety Toasts & Feedback
        toast_safety_contacts_saved: "Trusted contacts have been saved.",
        toast_safety_strategies_saved: "Coping strategies have been saved.",
        toast_suggestion_added: "Suggestion was added to your calming strategies.",
        toast_suggestion_exists: "This suggestion is already in your plan.",
        breathing_toast_started: "Breathing exercise started. Follow instructions.",
        breathing_toast_stopped: "Breathing exercise was stopped.",

        // Crisis Help Modal
        crisis_modal_badge: "🆘 IMMEDIATE SUPPORT",
        crisis_modal_title: "I Need Help",
        crisis_modal_sub: "You are safe. Here are your quick resources for this moment.",
        crisis_trust_card_title: "Trusted Person",
        crisis_trust_not_set: "Not configured in Safety Plan",
        crisis_trust_call_btn: "📞 Call Now",
        crisis_helpline_title: "24/7 Emergency Resources (Romania)",
        crisis_helpline_sub: "Free and confidential phone hotlines",
        crisis_line_112_label: "National Emergency Service",
        crisis_call_112_btn: "Call 112 →",
        crisis_line_suicide_label: "Romanian Suicide Prevention Alliance (24/7)",
        crisis_call_btn: "Call →",
        crisis_line_depre_label: "DepreHUB — Anxiety & Depression Support",
        crisis_exercise_title: "Calming Exercise (4-7-8 Breathing)",
        crisis_exercise_sub: "Lowers heart rate and eases anxiety in 2 minutes.",
        crisis_exercise_btn: "🫁 Start Guided Breathing"
    }
};

let currentLanguage = 'ro';

function t(key) {
    if (TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][key]) {
        return TRANSLATIONS[currentLanguage][key];
    }
    if (TRANSLATIONS['ro'] && TRANSLATIONS['ro'][key]) {
        return TRANSLATIONS['ro'][key];
    }
    return key;
}

function setLanguage(lang) {
    if (lang !== 'ro' && lang !== 'en') lang = 'ro';
    currentLanguage = lang;
    localStorage.setItem('staicumine_lang', lang);

    // Update active class on language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            if (el.getAttribute('data-i18n-html') === 'true') {
                el.innerHTML = TRANSLATIONS[lang][key];
            } else {
                el.textContent = TRANSLATIONS[lang][key];
            }
        }
    });

    // Update symptom cards text with data-i18n-symptom
    document.querySelectorAll('[data-i18n-symptom]').forEach(el => {
        const sym = el.getAttribute('data-i18n-symptom');
        const symKey = `symptom_${sym}`;
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][symKey]) {
            el.textContent = TRANSLATIONS[lang][symKey];
        }
    });

    // Refresh active tab headers
    const activeBtn = document.querySelector('.nav-btn.active');
    const tabId = activeBtn ? activeBtn.id.replace('btn-', '') : 'dashboard';
    const headerTitle = document.getElementById('header-title');
    const headerSubtitle = document.getElementById('header-subtitle');
    if (headerTitle && TRANSLATIONS[lang][`tab_title_${tabId}`]) {
        headerTitle.textContent = TRANSLATIONS[lang][`tab_title_${tabId}`];
    }
    if (headerSubtitle && TRANSLATIONS[lang][`tab_sub_${tabId}`]) {
        headerSubtitle.textContent = TRANSLATIONS[lang][`tab_sub_${tabId}`];
    }

    // Update journal notes placeholder
    const journalNotes = document.getElementById('journal-notes');
    if (journalNotes) {
        journalNotes.placeholder = t('journal_notes_placeholder');
    }

    // Update Safety Plan input placeholders
    const safetyDoc = document.getElementById('safety-doc-name');
    if (safetyDoc) safetyDoc.placeholder = t('safety_doc_ph');
    const safetyTherapist = document.getElementById('safety-therapist-name');
    if (safetyTherapist) safetyTherapist.placeholder = t('safety_therapist_ph');
    const safetyEmergency = document.getElementById('safety-emergency-name');
    if (safetyEmergency) safetyEmergency.placeholder = t('safety_emergency_ph');
    const safetyTriggers = document.getElementById('safety-triggers');
    if (safetyTriggers) safetyTriggers.placeholder = t('safety_triggers_ph');
    const safetyCoping = document.getElementById('safety-coping');
    if (safetyCoping) safetyCoping.placeholder = t('safety_coping_ph');

    // Update breathing exercise button and instruction if idle
    if (typeof isBreathingRunning !== 'undefined' && !isBreathingRunning) {
        const breathingBtn = document.getElementById('breathing-start-btn');
        if (breathingBtn) breathingBtn.textContent = t('safety_breathing_start_btn');
        const breathingInstruction = document.getElementById('breathing-instruction');
        if (breathingInstruction) breathingInstruction.textContent = t('safety_breathing_ready');
    }

    // Refresh slider values in current language
    const sleepInput = document.getElementById('sleep-hours');
    const anxietyInput = document.getElementById('anxiety-level');
    const energyInput = document.getElementById('energy-level');
    if (sleepInput) updateSliderVal('sleep-hours-val', sleepInput.value);
    if (anxietyInput) updateSliderVal('anxiety-val', anxietyInput.value);
    if (energyInput) updateSliderVal('energy-val', energyInput.value);

    if (tabId === 'dashboard') {
        updateDashboard();
    } else if (tabId === 'history') {
        renderHistory();
    }
}

function initLanguage() {
    const saved = localStorage.getItem('staicumine_lang');
    if (saved === 'ro' || saved === 'en') {
        setLanguage(saved);
    } else if (navigator.language && navigator.language.startsWith('en')) {
        setLanguage('en');
    } else {
        setLanguage('ro');
    }
}

// State Management
let moodEntries = [];
let safetyPlan = {
    docName: '',
    therapistName: '',
    emergencyName: '',
    triggers: '',
    coping: ''
};
let currentChartPeriod = 7; // default view

// Toast Notification Helper
function showToast(message) {
    const toast = document.getElementById('toast-notification');
    const toastMsg = document.getElementById('toast-message');
    toastMsg.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

// Local Date Helpers (avoid UTC timezone shifts)
function toLocalDateString(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function parseLocalDate(dateStr) {
    if (!dateStr) return new Date();
    return new Date(dateStr.includes('T') ? dateStr : `${dateStr}T00:00:00`);
}

function isValidLocalDateString(value) {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const [year, month, day] = value.split('-').map(Number);
    const parsed = new Date(year, month - 1, day);
    return (
        parsed.getFullYear() === year &&
        parsed.getMonth() === month - 1 &&
        parsed.getDate() === day
    );
}

// Format date helper (locale-aware)
function formatDateRO(dateStr) {
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    const date = parseLocalDate(dateStr);
    const locale = (typeof currentLanguage !== 'undefined' && currentLanguage === 'en') ? 'en-US' : 'ro-RO';
    return date.toLocaleDateString(locale, options);
}

// Generate Realistic Mock Data for Demonstration
function generateMockData() {
    const entries = [];
    const today = new Date();
    
    // 10 days of mock data simulating a transition from mild depression to stability, with sleep variance
    const mockPatterns = [
        { mood: -3, sleep: 5.5, anxiety: 6, energy: 3, symptoms: ['tristete', 'lipsa_concentrare'], med: true, notes: 'M-am trezit foarte obosit și fără energie. Activitățile de la serviciu mi s-au părut copleșitoare. Am stat retras.' },
        { mood: -2, sleep: 6.0, anxiety: 5, energy: 4, symptoms: ['tristete', 'retragere_sociala'], med: true, notes: 'Puțin mai bine ca ieri, dar tot am o senzație de greutate în piept. Am dormit ceva mai mult.' },
        { mood: 0, sleep: 7.5, anxiety: 2, energy: 5, med: true, notes: "O zi liniștită. Plimbare scurtă în parc.", symptoms: [] },
        { mood: 0, sleep: 8.0, anxiety: 1, energy: 5, med: true, notes: "Somn bun. Stare generală stabilă.", symptoms: [] },
        { mood: 1, sleep: 7.0, anxiety: 3, energy: 6, med: true, notes: "Idei multe la muncă. Energie ridicată.", symptoms: ["insomnie_usoara"] },
        { mood: 2, sleep: 5.5, anxiety: 4, energy: 8, med: true, notes: "Vorbesc repede, multe proiecte începute.", symptoms: ["insomnie_usoara", "iritabilitate"] },
        { mood: 2, sleep: 5.0, anxiety: 5, energy: 8, med: false, notes: "Am uitat pastila. Agitație.", symptoms: ["insomnie_usoara", "impulsivitate"] },
        { mood: 1, sleep: 6.5, anxiety: 3, energy: 6, med: true, notes: "M-am liniștit puțin seara.", symptoms: [] },
        { mood: 0, sleep: 7.0, anxiety: 2, energy: 5, med: true, notes: "Zi obișnuită de lucru.", symptoms: [] },
        { mood: -1, sleep: 8.5, anxiety: 3, energy: 4, med: true, notes: "Oboseală nespecifică. Lipsă de motivație.", symptoms: ["oboseala"] },
        { mood: -2, sleep: 9.5, anxiety: 5, energy: 2, med: true, notes: "Tristețe nemotivată. Greu de ieșit din casă.", symptoms: ["oboseala", "tristete"] },
        { mood: -2, sleep: 9.0, anxiety: 4, energy: 3, med: true, notes: "Încă fără energie. Am vorbit cu un prieten.", symptoms: ["oboseala"] },
        { mood: -1, sleep: 8.0, anxiety: 2, energy: 4, med: true, notes: "Ușoară îmbunătățire.", symptoms: [] },
        { mood: 0, sleep: 7.5, anxiety: 2, energy: 5, med: true, notes: "Revenire la starea neutră.", symptoms: [] },
        { mood: 0, sleep: 7.5, anxiety: 1, energy: 5, med: true, notes: "Zi excelentă în familie.", symptoms: [] },
        { mood: 0, sleep: 7.0, anxiety: 2, energy: 5, med: true, notes: "Monitorizare de rutină.", symptoms: [] }
    ];

    for (let i = 13; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const dateStr = toLocalDateString(d);
        const pat = mockPatterns[13 - i];

        entries.push({
            date: dateStr,
            mood: pat.mood,
            sleep: pat.sleep,
            anxiety: pat.anxiety,
            energy: pat.energy,
            medicationTaken: pat.med,
            notes: pat.notes,
            symptoms: pat.symptoms
        });
    }
    
    return entries;
}

function populateSafetyPlanInputs() {
    const doc = document.getElementById('safety-doc-name');
    const ther = document.getElementById('safety-therapist-name');
    const em = document.getElementById('safety-emergency-name');
    const trig = document.getElementById('safety-triggers');
    const cop = document.getElementById('safety-coping');
    if (doc) doc.value = safetyPlan.docName || '';
    if (ther) ther.value = safetyPlan.therapistName || '';
    if (em) em.value = safetyPlan.emergencyName || safetyPlan.contactName || '';
    if (trig) trig.value = safetyPlan.triggers || '';
    if (cop) cop.value = safetyPlan.coping || '';
}

// Load Data from LocalStorage
function loadData() {
    const storedEntries = localStorage.getItem('staicumine_mood_entries') || localStorage.getItem('equilibrium_mood_entries');
    const isDemo = (localStorage.getItem('staicumine_is_demo') || localStorage.getItem('equilibrium_is_demo')) === 'true';
    const isInitialized = localStorage.getItem('staicumine_initialized') === 'true';
    
    if (isInitialized && storedEntries) {
        try {
            const raw = JSON.parse(storedEntries);
            moodEntries = (Array.isArray(raw) ? raw : [])
                .map(validateAndNormalizeMoodEntry)
                .filter(Boolean);
            if (JSON.stringify(moodEntries) !== JSON.stringify(raw)) {
                saveEntriesToStorage();
            }
        } catch (e) {
            moodEntries = [];
        }
        if (isDemo) {
            setTimeout(() => showDemoBanner(), 600);
        }
    } else if (isInitialized) {
        moodEntries = [];
    } else {
        // First time user: start empty and show choice modal
        moodEntries = [];
        setTimeout(() => showWelcomeChoiceModal(), 600);
    }

    const storedSafety = localStorage.getItem('staicumine_safety_plan') || localStorage.getItem('equilibrium_safety_plan');
    if (storedSafety) {
        try {
            safetyPlan = JSON.parse(storedSafety);
        } catch (e) {
            console.error('Error loading safety plan:', e);
        }
    }
    populateSafetyPlanInputs();
    
    // Sort entries chronologically
    sortEntries();
}

// First time choice handlers
function showWelcomeChoiceModal() {
    const modal = document.getElementById('welcome-modal');
    if (modal) modal.style.display = 'flex';
}

function startFreshJournal() {
    localStorage.setItem('staicumine_initialized', 'true');
    localStorage.setItem('staicumine_mood_entries', JSON.stringify([]));
    localStorage.setItem('staicumine_is_demo', 'false');
    moodEntries = [];
    
    const modal = document.getElementById('welcome-modal');
    if (modal) modal.style.display = 'none';
    
    const banner = document.getElementById('demo-data-banner');
    if (banner) banner.style.display = 'none';

    showToast('Bun venit! Ai creat propriul tău jurnal privat.');
    updateDashboard();
}

function loadDemoJournal() {
    localStorage.setItem('staicumine_initialized', 'true');
    moodEntries = generateMockData();
    localStorage.setItem('staicumine_mood_entries', JSON.stringify(moodEntries));
    localStorage.setItem('staicumine_is_demo', 'true');
    
    const modal = document.getElementById('welcome-modal');
    if (modal) modal.style.display = 'none';
    
    showDemoBanner();
    showToast('Exemplul demo a fost încărcat. Îl poți șterge oricând din banner!');
    updateDashboard();
}

// Show / hide demo banner
function showDemoBanner() {
    const banner = document.getElementById('demo-data-banner');
    if (banner) banner.style.display = 'flex';
}

// Clear demo data and start fresh
function clearDemoData() {
    if (confirm('Ești sigur că vrei să ștergi datele demo și să începi cu un jurnal gol? Această acțiune nu poate fi anulată.')) {
        localStorage.removeItem('staicumine_mood_entries');
        localStorage.removeItem('staicumine_is_demo');
        localStorage.removeItem('equilibrium_mood_entries');
        localStorage.removeItem('equilibrium_is_demo');
        moodEntries = [];
        saveEntriesToStorage();
        const banner = document.getElementById('demo-data-banner');
        if (banner) banner.style.display = 'none';
        showToast('Date demo șterse. Poți începe primul tău jurnal!');
        switchTab('log');
    }
}

// Onboarding modal state
let onboardingStep = 1;
const ONBOARDING_STEPS = 3;

function showOnboarding() {
    const modal = document.getElementById('onboarding-modal');
    if (modal) {
        onboardingStep = 1;
        updateOnboardingStep();
        modal.style.display = 'flex';
    }
}

function updateOnboardingStep() {
    for (let i = 1; i <= ONBOARDING_STEPS; i++) {
        const step = document.getElementById(`onboarding-step-${i}`);
        if (step) step.style.display = i === onboardingStep ? 'block' : 'none';
    }
    const dots = document.querySelectorAll('.onboarding-dot');
    dots.forEach((d, idx) => {
        d.classList.toggle('active', idx + 1 === onboardingStep);
    });
    const nextBtn = document.getElementById('onboarding-next-btn');
    if (nextBtn) {
        nextBtn.textContent = onboardingStep === ONBOARDING_STEPS ? 'Să începem!' : 'Înainte →';
    }
}

function onboardingNext() {
    if (onboardingStep < ONBOARDING_STEPS) {
        onboardingStep++;
        updateOnboardingStep();
    } else {
        closeOnboarding();
    }
}

function closeOnboarding() {
    const modal = document.getElementById('onboarding-modal');
    if (modal) modal.style.display = 'none';
    localStorage.setItem('staicumine_onboarding_done', 'true');
}

// Sort entries by date ascending
function sortEntries() {
    moodEntries.sort((a, b) => new Date(a.date) - new Date(b.date));
}

// Save entries to LocalStorage
function saveEntriesToStorage() {
    localStorage.setItem('staicumine_mood_entries', JSON.stringify(moodEntries));
}

// Mobile Sandwich / Hamburger Menu Logic
function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar && sidebar.classList.contains('open')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.getElementById('mobile-menu-backdrop');
    if (sidebar) sidebar.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.getElementById('mobile-menu-backdrop');
    if (sidebar) sidebar.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
}

// Tab view switching logic
function switchTab(tabId, skipReset = false) {
    // Always close mobile sandwich menu when a tab is selected
    closeMobileMenu();

    // Dismiss welcome modal if open when user navigates
    const welcomeModal = document.getElementById('welcome-modal');
    if (welcomeModal && welcomeModal.style.display !== 'none') {
        welcomeModal.style.display = 'none';
        localStorage.setItem('staicumine_initialized', 'true');
    }

    // If leaving safety tab, stop breathing exercise
    if (tabId !== 'safety') {
        stopBreathingIfRunning();
    }

    // Hide all views
    document.querySelectorAll('.tab-view').forEach(view => view.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    
    // Show active view
    const activeView = document.getElementById(`view-${tabId}`);
    if (activeView) activeView.classList.add('active');
    
    // Set active button
    const activeBtn = document.getElementById(`btn-${tabId}`);
    if (activeBtn) activeBtn.classList.add('active');
    
    // Update header context or perform specific actions
    const headerTitle = document.getElementById('header-title');
    const headerSubtitle = document.getElementById('header-subtitle');
    
    if (headerTitle && TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][`tab_title_${tabId}`]) {
        headerTitle.textContent = TRANSLATIONS[currentLanguage][`tab_title_${tabId}`];
    }
    if (headerSubtitle && TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][`tab_sub_${tabId}`]) {
        headerSubtitle.textContent = TRANSLATIONS[currentLanguage][`tab_sub_${tabId}`];
    }
    
    if (tabId === 'dashboard') {
        updateDashboard();
    } else if (tabId === 'log') {
        if (!skipReset) {
            resetLogForm();
        }
    } else if (tabId === 'history') {
        renderHistory();
    }
}

// Edit Existing Entry Handler & Draft Auto-Save Protection Flag
let isProgrammaticUpdate = false;

function editEntry(dateStr) {
    const entry = moodEntries.find(e => e.date === dateStr);
    if (!entry) {
        showToast("Nu am găsit înregistrarea pentru această dată.");
        return;
    }

    // Switch to log tab without resetting form
    switchTab('log', true);

    isProgrammaticUpdate = true;
    try {
        const dateInput = document.getElementById('entry-date');
        if (dateInput) {
            dateInput.value = entry.date;
            dateInput.max = toLocalDateString();
        }

        setMoodValue(entry.mood);

        document.getElementById('sleep-hours').value = entry.sleep;
        updateSliderVal('sleep-hours-val', entry.sleep);

        document.getElementById('anxiety-level').value = entry.anxiety;
        updateSliderVal('anxiety-val', entry.anxiety);

        document.getElementById('energy-level').value = entry.energy;
        updateSliderVal('energy-val', entry.energy);

        document.getElementById('medication-taken').checked = !!entry.medicationTaken;
        document.getElementById('journal-notes').value = entry.notes || '';

        // Populate Symptoms Checklist
        document.querySelectorAll('.symptom-card').forEach(card => {
            const input = card.querySelector('input[name="symptom"]');
            if (input) {
                const normalizedEntrySymptoms = (entry.symptoms || []).map(normalizeSymptomId);
                const isChecked = normalizedEntrySymptoms.includes(normalizeSymptomId(input.value));
                input.checked = isChecked;
                if (isChecked) {
                    card.classList.add('selected');
                } else {
                    card.classList.remove('selected');
                }
            }
        });

        // Update Form Header Title & Submit CTA
        const formTitle = document.querySelector('#view-log .form-header-bar h2');
        if (formTitle) formTitle.textContent = t('checkin_header_title_edit');

        const submitBtn = document.querySelector('#view-log button[type="submit"]');
        if (submitBtn) submitBtn.textContent = t('submit_btn_update');

        // Show edit mode badge
        let editBadge = document.getElementById('edit-mode-notice-badge');
        if (!editBadge) {
            editBadge = document.createElement('div');
            editBadge.id = 'edit-mode-notice-badge';
            editBadge.className = 'edit-mode-notice-badge';
            const formHeader = document.querySelector('#view-log .form-header-bar');
            if (formHeader) formHeader.parentNode.insertBefore(editBadge, formHeader.nextSibling);
        }
        editBadge.innerHTML = `✏️ Modifici check-in-ul salvat din <strong>${formatDateRO(entry.date)}</strong>`;
        editBadge.style.display = 'block';

        checkExistingEntryForDate(entry.date);
    } finally {
        isProgrammaticUpdate = false;
    }

    showToast(`Editare activă pentru ${formatDateRO(entry.date)}`);
}

// Reset log form input values
function resetLogForm() {
    isProgrammaticUpdate = true;
    try {
        // Reset Form Header & CTA text
        const formTitle = document.querySelector('#view-log .form-header-bar h2');
        if (formTitle) formTitle.textContent = t('checkin_header_title');

        const submitBtn = document.querySelector('#view-log button[type="submit"]');
        if (submitBtn) submitBtn.textContent = t('submit_btn_save');

        const editBadge = document.getElementById('edit-mode-notice-badge');
        if (editBadge) editBadge.style.display = 'none';

        const todayStr = toLocalDateString();
        const dateInput = document.getElementById('entry-date');
        if (dateInput) {
            dateInput.value = todayStr;
            dateInput.max = todayStr;
        }

        setMoodValue(0);
        
        document.getElementById('sleep-hours').value = 8;
        updateSliderVal('sleep-hours-val', 8);
        
        document.getElementById('anxiety-level').value = 2;
        updateSliderVal('anxiety-val', 2);
        
        document.getElementById('energy-level').value = 5;
        updateSliderVal('energy-val', 5);
        
        // Reset symptom cards
        document.querySelectorAll('.symptom-card').forEach(card => {
            card.classList.remove('selected');
            const input = card.querySelector('input[name="symptom"]');
            if (input) input.checked = false;
        });
        
        document.getElementById('medication-taken').checked = true;
        document.getElementById('journal-notes').value = '';
        checkExistingEntryForDate(todayStr);
    } finally {
        isProgrammaticUpdate = false;
    }

    restoreDraft();
}

// Handle slider value display badges
function updateSliderVal(badgeId, value) {
    const badge = document.getElementById(badgeId);
    if (!badge) return;
    
    const val = parseFloat(value);

    if (badgeId === 'sleep-hours-val') {
        const hourUnit = val === 1 ? t('slider_hour_singular') : t('slider_hours');
        badge.textContent = `${val} ${hourUnit}`;
    } else if (badgeId === 'anxiety-val') {
        let labelKey = 'anxiety_low';
        if (val >= 9) labelKey = 'anxiety_extreme';
        else if (val >= 7) labelKey = 'anxiety_severe';
        else if (val >= 5) labelKey = 'anxiety_moderate';
        else if (val >= 2) labelKey = 'anxiety_tolerable';
        else if (val <= 1) labelKey = 'anxiety_low';
        badge.textContent = `${val} / 10 • ${t(labelKey)}`;
    } else if (badgeId === 'energy-val') {
        let labelKey = 'energy_moderate';
        if (val >= 9) labelKey = 'energy_very_high';
        else if (val >= 7) labelKey = 'energy_good';
        else if (val >= 5) labelKey = 'energy_moderate';
        else if (val >= 3) labelKey = 'energy_low';
        else if (val <= 2) labelKey = 'energy_very_low';
        badge.textContent = `${val} / 10 • ${t(labelKey)}`;
    }
}

// Mood values selector buttons (7-column Bipolar Grid)
function setMoodValue(val) {
    document.getElementById('mood-value').value = val;
    
    // Toggle active state on buttons
    document.querySelectorAll('.bipolar-btn, .bipolar-btn-7, .emoji-mood-card').forEach(btn => {
        if (parseInt(btn.getAttribute('data-val')) === val) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    saveDraft();
}

// Toggle symptom card click
function toggleSymptomCard(cardElement) {
    const checkbox = cardElement.querySelector('input[name="symptom"]');
    if (!checkbox) return;

    checkbox.checked = !checkbox.checked;
    if (checkbox.checked) {
        cardElement.classList.add('selected');
    } else {
        cardElement.classList.remove('selected');
    }
    saveDraft();
}

// Check if duplicate entry exists for selected date
function checkExistingEntryForDate(dateStr) {
    const warning = document.getElementById('duplicate-date-warning');
    if (!warning) return;

    const existing = moodEntries.find(e => e.date === dateStr);
    if (existing) {
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
    }
    saveDraft();
}

// Auto-Draft Management (LocalStorage with Strict Date Matching)
function saveDraft() {
    if (isProgrammaticUpdate) return;
    const dateVal = document.getElementById('entry-date')?.value;
    if (!dateVal) return;

    const draftData = {
        date: dateVal,
        mood: document.getElementById('mood-value')?.value,
        sleep: document.getElementById('sleep-hours')?.value,
        anxiety: document.getElementById('anxiety-level')?.value,
        energy: document.getElementById('energy-level')?.value,
        medicationTaken: document.getElementById('medication-taken')?.checked,
        journalNotes: document.getElementById('journal-notes')?.value,
        symptoms: Array.from(document.querySelectorAll('input[name="symptom"]:checked')).map(cb => cb.value),
        savedAt: new Date().toISOString()
    };
    localStorage.setItem('staicumine_checkin_draft', JSON.stringify(draftData));
    
    const notice = document.getElementById('draft-status-notice');
    const label = document.getElementById('draft-time-label');
    if (notice && label) {
        notice.style.display = 'block';
        label.textContent = '(salvat automat)';
    }
}

function restoreDraft() {
    const draftStr = localStorage.getItem('staicumine_checkin_draft');
    const unfinishedBanner = document.getElementById('unfinished-draft-banner');
    if (unfinishedBanner) unfinishedBanner.style.display = 'none';

    if (!draftStr) return;

    try {
        const draft = JSON.parse(draftStr);
        const currentDateInput = document.getElementById('entry-date')?.value;

        // Strict Date Matching Check:
        if (draft.date && draft.date !== currentDateInput) {
            // Draft belongs to a different date! Show smart prompt.
            showUnfinishedDraftBanner(draft.date);
            return;
        }

        // Same date: restore values cleanly
        isProgrammaticUpdate = true;
        try {
            if (draft.mood !== undefined) setMoodValue(parseInt(draft.mood, 10));
            if (draft.sleep !== undefined) {
                document.getElementById('sleep-hours').value = draft.sleep;
                updateSliderVal('sleep-hours-val', draft.sleep);
            }
            if (draft.anxiety !== undefined) {
                document.getElementById('anxiety-level').value = draft.anxiety;
                updateSliderVal('anxiety-val', draft.anxiety);
            }
            if (draft.energy !== undefined) {
                document.getElementById('energy-level').value = draft.energy;
                updateSliderVal('energy-val', draft.energy);
            }
            if (draft.medicationTaken !== undefined) {
                document.getElementById('medication-taken').checked = Boolean(draft.medicationTaken);
            }
            if (draft.journalNotes !== undefined) {
                document.getElementById('journal-notes').value = draft.journalNotes;
            }
            if (draft.symptoms && Array.isArray(draft.symptoms)) {
                document.querySelectorAll('.symptom-card').forEach(card => {
                    const input = card.querySelector('input[name="symptom"]');
                    if (input) {
                        const isChecked = draft.symptoms.includes(input.value);
                        input.checked = isChecked;
                        if (isChecked) card.classList.add('selected');
                        else card.classList.remove('selected');
                    }
                });
            }
        } finally {
            isProgrammaticUpdate = false;
        }

        const notice = document.getElementById('draft-status-notice');
        const label = document.getElementById('draft-time-label');
        if (notice && label) {
            notice.style.display = 'block';
            label.textContent = '(restaurat automat)';
        }
    } catch(e) {}
}

function showUnfinishedDraftBanner(draftDate) {
    let banner = document.getElementById('unfinished-draft-banner');
    if (!banner) {
        banner = document.createElement('div');
        banner.id = 'unfinished-draft-banner';
        banner.className = 'unfinished-draft-banner';
        const formHeader = document.querySelector('#view-log .form-header-bar');
        if (formHeader) formHeader.parentNode.insertBefore(banner, formHeader.nextSibling);
    }
    
    banner.innerHTML = `
        <div class="unfinished-draft-content">
            <span>📝 Ai un check-in neterminat din <strong>${formatDateRO(draftDate)}</strong>. Vrei să-l continui?</span>
            <div class="unfinished-draft-actions">
                <button type="button" class="action-btn-primary btn-sm" onclick="continueDraftDate('${draftDate}')">Continuă draftul din ${formatDateRO(draftDate)}</button>
                <button type="button" class="action-btn-secondary btn-sm" onclick="clearDraft()">Șterge draftul</button>
            </div>
        </div>
    `;
    banner.style.display = 'block';
}

function continueDraftDate(draftDate) {
    document.getElementById('entry-date').value = draftDate;
    checkExistingEntryForDate(draftDate);
    restoreDraft();
}

function clearDraft() {
    localStorage.removeItem('staicumine_checkin_draft');
    const notice = document.getElementById('draft-status-notice');
    if (notice) notice.style.display = 'none';
    const unfinishedBanner = document.getElementById('unfinished-draft-banner');
    if (unfinishedBanner) unfinishedBanner.style.display = 'none';
}

// Save Mood Entry Form Handler
function saveMoodEntry(event) {
    event.preventDefault();
    
    const date = document.getElementById('entry-date').value;
    const mood = parseInt(document.getElementById('mood-value').value);
    const sleep = parseFloat(document.getElementById('sleep-hours').value);
    const anxiety = parseInt(document.getElementById('anxiety-level').value);
    const energy = parseInt(document.getElementById('energy-level').value);
    const medicationTaken = document.getElementById('medication-taken').checked;
    const notes = document.getElementById('journal-notes').value.trim();
    
    // Symptoms Checklist
    const symptoms = [];
    document.querySelectorAll('input[name="symptom"]:checked').forEach(cb => {
        symptoms.push(cb.value);
    });

    const newEntry = {
        date,
        mood,
        sleep,
        anxiety,
        energy,
        symptoms,
        medicationTaken,
        notes
    };

    // Check if an entry already exists for this date, overwrite if so
    const existingIndex = moodEntries.findIndex(e => e.date === date);
    if (existingIndex !== -1) {
        if (confirm(`Există deja un check-in pentru data de ${formatDateRO(date)}. Dorești să-l actualizezi?`)) {
            moodEntries[existingIndex] = newEntry;
            showToast("Check-in-ul a fost actualizat cu succes!");
        } else {
            return;
        }
    } else {
        moodEntries.push(newEntry);
        showToast("Check-in-ul a fost salvat!");
    }

    clearDraft();
    sortEntries();
    saveEntriesToStorage();
    switchTab('dashboard');
}

// Save Safety Plan Contacts
function saveSafetyPlan(event) {
    event.preventDefault();
    safetyPlan.docName = document.getElementById('safety-doc-name').value.trim();
    safetyPlan.therapistName = document.getElementById('safety-therapist-name').value.trim();
    safetyPlan.emergencyName = document.getElementById('safety-emergency-name').value.trim();
    
    localStorage.setItem('staicumine_safety_plan', JSON.stringify(safetyPlan));
    showToast(t('toast_safety_contacts_saved'));
}

// Save Safety Plan Coping strategies
function saveSafetyStrategies(event) {
    event.preventDefault();
    safetyPlan.triggers = document.getElementById('safety-triggers').value.trim();
    safetyPlan.coping = document.getElementById('safety-coping').value.trim();
    
    localStorage.setItem('staicumine_safety_plan', JSON.stringify(safetyPlan));
    showToast(t('toast_safety_strategies_saved'));
}

// Render Hero Card based on user check-in lifecycle state
function renderHeroCard() {
    const container = document.getElementById('welcome-hero-card-container');
    if (!container) return;

    const todayStr = new Date().toISOString().split('T')[0];
    const todayEntry = moodEntries.find(e => e.date === todayStr);

    if (moodEntries.length === 0) {
        container.innerHTML = `
            <div class="welcome-hero-card glass onboarding-hero">
                <div class="welcome-hero-text">
                    <h2>${t('hero_greeting')}</h2>
                    <p class="welcome-hero-sub">${t('hero_how_feeling')}</p>
                    <p class="hero-onboarding-hint">${t('hero_hint_duration')}</p>
                </div>
                <button class="checkin-btn-hero" onclick="switchTab('log')">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
                    <span>${t('hero_start_first')}</span>
                </button>
            </div>
        `;
    } else if (!todayEntry) {
        container.innerHTML = `
            <div class="welcome-hero-card glass">
                <div class="welcome-hero-text">
                    <h2>${t('hero_greeting')}</h2>
                    <p class="welcome-hero-sub">${t('hero_how_feeling')}</p>
                </div>
                <button class="checkin-btn-hero" onclick="switchTab('log')">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
                    <span>${t('hero_log_today')}</span>
                </button>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="welcome-hero-card glass completed-hero">
                <div class="welcome-hero-text">
                    <h2>${t('hero_greeting')}</h2>
                    <p class="welcome-hero-sub">${t('hero_completed_sub')}</p>
                </div>
                <div class="hero-completed-actions">
                    <span class="completed-badge">${t('hero_completed_badge')}</span>
                    <button class="edit-btn-hero" onclick="editEntry('${todayStr}')">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                        <span>${t('hero_edit_btn')}</span>
                    </button>
                </div>
            </div>
        `;
    }
}

// Dynamic dashboard update: Stats & Chart
function updateDashboard() {
    // Render dynamic lifecycle Hero Card (Onboarding vs Daily vs Completed)
    renderHeroCard();

    // Check if we need to show the backup warning banner
    checkBackupWarning();

    // Update main chart title and subtitle
    const titleEl = document.getElementById('chart-main-title');
    const subEl = document.getElementById('chart-main-sub');
    if (titleEl) titleEl.textContent = t(`chart_title_${currentChartMetric}`);
    if (subEl) subEl.textContent = t(`chart_sub_${currentChartMetric}`);

    const emptyCard = document.getElementById('chart-empty-card');
    const canvasWrapper = document.getElementById('canvas-wrapper');
    const chartLegend = document.getElementById('chart-legend');
    const filtersContainer = document.getElementById('chart-filters-container');

    if (moodEntries.length === 0) {
        resetDashboardStats();
        if (emptyCard) emptyCard.style.display = 'flex';
        if (canvasWrapper) canvasWrapper.style.display = 'none';
        if (chartLegend) chartLegend.style.display = 'none';
        if (filtersContainer) filtersContainer.style.display = 'none';
        renderInsights([]);
        return;
    }

    // Filter entries for the selected chart period (7, 30, 90 days)
    const filteredEntries = getEntriesForPeriod(currentChartPeriod);
    
    if (filteredEntries.length === 0) {
        resetDashboardStats();
        if (emptyCard) emptyCard.style.display = 'flex';
        if (canvasWrapper) canvasWrapper.style.display = 'none';
        if (chartLegend) chartLegend.style.display = 'none';
        if (filtersContainer) filtersContainer.style.display = 'none';
        renderInsights([]);
        return;
    }

    // Entries exist
    if (emptyCard) emptyCard.style.display = 'none';
    if (canvasWrapper) canvasWrapper.style.display = 'block';
    if (chartLegend) chartLegend.style.display = 'flex';
    if (filtersContainer) filtersContainer.style.display = 'flex';

    calculateStats(filteredEntries);
    renderInsights(filteredEntries);
    drawCustomChart(filteredEntries);
    renderSparklines(filteredEntries);
}

// Helper to filter entries based on timeframe (Exact calendar day cutoff)
function getEntriesForPeriod(days) {
    const today = new Date();
    const cutoffDate = new Date(today);
    cutoffDate.setDate(today.getDate() - (days - 1));
    cutoffDate.setHours(0, 0, 0, 0);
    
    return moodEntries.filter(entry => {
        const entryDate = new Date(entry.date + 'T00:00:00');
        return entryDate >= cutoffDate;
    });
}

// Reset stats cards to empty states
function resetDashboardStats() {
    const noDataText = t('stat_no_data');
    document.getElementById('stat-avg-mood').textContent = "-";
    document.getElementById('stat-avg-mood-desc').textContent = noDataText;
    
    document.getElementById('stat-avg-sleep').textContent = "-";
    document.getElementById('stat-avg-sleep-desc').textContent = noDataText;
    
    document.getElementById('stat-avg-anxiety').textContent = "-";
    document.getElementById('stat-avg-anxiety-desc').textContent = noDataText;
    
    if (document.getElementById('stat-avg-energy')) {
        document.getElementById('stat-avg-energy').textContent = "-";
        document.getElementById('stat-avg-energy-desc').textContent = noDataText;
    }

    if (document.getElementById('summary-total-entries')) {
        document.getElementById('summary-total-entries').textContent = `0 ${t('summary_lbl_checkins').toLowerCase()}`;
        document.getElementById('summary-avg-sleep').textContent = `0.0 h ${t('summary_lbl_sleep').toLowerCase()}`;
        document.getElementById('summary-avg-anxiety').textContent = `0.0 ${t('summary_lbl_anxiety').toLowerCase()}`;
        document.getElementById('summary-med-adherence').textContent = "0%";
    }
}

// Calculate dashboard indicators
function calculateStats(entries) {
    let totalMood = 0;
    let totalSleep = 0;
    let totalAnxiety = 0;
    let totalEnergy = 0;
    let medCount = 0;
    
    entries.forEach(e => {
        totalMood += e.mood;
        totalSleep += e.sleep;
        totalAnxiety += e.anxiety;
        totalEnergy += (e.energy !== undefined ? e.energy : 5);
        if (e.medicationTaken) medCount++;
    });

    const count = entries.length;
    const avgMood = totalMood / count;
    const avgSleep = totalSleep / count;
    const avgAnxiety = totalAnxiety / count;
    const avgEnergy = totalEnergy / count;
    const medAdherence = (medCount / count) * 100;

    // Mood description — ton cald, non-clinic
    let moodSign = avgMood > 0 ? "+" : "";
    document.getElementById('stat-avg-mood').textContent = `${moodSign}${avgMood.toFixed(1)}`;
    
    let moodDesc = t('stat_mood_stable');
    if (avgMood > 3) moodDesc = t('stat_mood_very_high');
    else if (avgMood > 1.5) moodDesc = t('stat_mood_elevated');
    else if (avgMood > 0.5) moodDesc = t('stat_mood_slightly_high');
    else if (avgMood < -3) moodDesc = t('stat_mood_severe_dep');
    else if (avgMood < -1.5) moodDesc = t('stat_mood_difficult');
    else if (avgMood < -0.5) moodDesc = t('stat_mood_slightly_low');
    
    document.getElementById('stat-avg-mood-desc').textContent = moodDesc;
    
    // Sleep avg
    document.getElementById('stat-avg-sleep').textContent = `${avgSleep.toFixed(1)} h`;
    let sleepDesc = t('stat_sleep_good');
    if (avgSleep < 6) sleepDesc = t('stat_sleep_low');
    else if (avgSleep > 9) sleepDesc = t('stat_sleep_too_long');
    document.getElementById('stat-avg-sleep-desc').textContent = sleepDesc;

    // Anxiety avg
    document.getElementById('stat-avg-anxiety').textContent = `${avgAnxiety.toFixed(1)}`;
    let anxietyDesc = t('stat_anxiety_low');
    if (avgAnxiety >= 7) anxietyDesc = t('stat_anxiety_high');
    else if (avgAnxiety >= 3.5) anxietyDesc = t('stat_anxiety_moderate');
    document.getElementById('stat-avg-anxiety-desc').textContent = anxietyDesc;

    // Energy avg
    if (document.getElementById('stat-avg-energy')) {
        document.getElementById('stat-avg-energy').textContent = `${avgEnergy.toFixed(1)}`;
        let energyDesc = t('stat_energy_good');
        if (avgEnergy >= 7.5) energyDesc = t('stat_energy_very_high');
        else if (avgEnergy < 4) energyDesc = t('stat_energy_low');
        document.getElementById('stat-avg-energy-desc').textContent = energyDesc;
    }

    // Summary Box (Visual 2x2 Grid)
    if (document.getElementById('summary-total-val')) {
        document.getElementById('summary-total-val').textContent = `${count}`;
        document.getElementById('summary-sleep-val').textContent = `${avgSleep.toFixed(1)} h`;
        document.getElementById('summary-anxiety-val').textContent = `${avgAnxiety.toFixed(1)}/10`;
        
        let moodSign = avgMood > 0 ? "+" : "";
        document.getElementById('summary-mood-val').textContent = `${moodSign}${avgMood.toFixed(1)}`;
    }
}

// Generate dynamic statistical insights from data (Graduated Confidence UX)
function renderInsights(entries) {
    const list = document.getElementById('insights-list');
    if (!list) return;
    list.innerHTML = '';
    
    const count = entries.length;

    // Stage 1: 0 - 2 check-ins -> Summary only, no observations yet
    if (count < 3) {
        list.innerHTML = `
            <div class="empty-state-insights" style="text-align:center;padding:1.25rem 0.5rem">
                <div class="empty-icon-badge" style="width:36px;height:36px;font-size:1.1rem;margin:0 auto 0.6rem;display:flex;align-items:center;justify-content:center;background:rgba(99,102,241,0.12);border-radius:50%">📈</div>
                <h4 style="font-size:0.92rem;font-weight:700;color:var(--text-primary);margin-bottom:0.3rem">${t('insights_collecting_title')}</h4>
                <p style="font-size:0.84rem;color:var(--text-muted);line-height:1.5;max-width:320px;margin:0 auto">
                    ${t('insights_collecting_desc')}
                </p>
            </div>`;
        return;
    }

    // Determine confidence level badge based on check-in count
    let confidenceLabel = '';
    let confidenceBadgeClass = '';
    
    if (count >= 3 && count <= 6) {
        confidenceLabel = t('badge_preliminary');
        confidenceBadgeClass = 'badge-preliminary';
    } else if (count >= 7 && count <= 29) {
        confidenceLabel = t('badge_pattern');
        confidenceBadgeClass = 'badge-pattern';
    } else {
        confidenceLabel = t('badge_trend');
        confidenceBadgeClass = 'badge-trend';
    }

    const insights = [];
    const isEn = currentLanguage === 'en';

    // Analyze Sleep vs Anxiety
    const lowSleepDays = entries.filter(e => e.sleep < 6.5);
    const normalSleepDays = entries.filter(e => e.sleep >= 6.5);
    
    if (lowSleepDays.length >= 1 && normalSleepDays.length >= 1) {
        const avgAnxietyLowSleep = lowSleepDays.reduce((sum, e) => sum + e.anxiety, 0) / lowSleepDays.length;
        const avgAnxietyNormalSleep = normalSleepDays.reduce((sum, e) => sum + e.anxiety, 0) / normalSleepDays.length;
        
        if (avgAnxietyLowSleep > avgAnxietyNormalSleep + 0.8) {
            insights.push({
                type: 'alert',
                icon: '😴',
                title: isEn ? 'Sleep and anxiety appear linked' : 'Somnul și anxietatea par asociate',
                desc: count <= 6 
                    ? (isEn
                        ? `Initial observation: average anxiety was ${avgAnxietyLowSleep.toFixed(1)}/10 on days with less than 6.5h sleep, compared to ${avgAnxietyNormalSleep.toFixed(1)}/10 on days with restful sleep.`
                        : `O primă observație: anxietatea medie a fost de ${avgAnxietyLowSleep.toFixed(1)}/10 în zilele cu mai puțin de 6.5h somn, față de ${avgAnxietyNormalSleep.toFixed(1)}/10 în zilele cu somn odihnitor.`)
                    : (isEn
                        ? `In the last ${currentChartPeriod} days (${count} check-ins), average anxiety was ${avgAnxietyLowSleep.toFixed(1)}/10 on days with less than 6.5 hours of sleep, compared to ${avgAnxietyNormalSleep.toFixed(1)}/10 on days with sufficient sleep.`
                        : `În ultimele ${currentChartPeriod} zile (${count} check-in-uri), anxietatea medie a fost de ${avgAnxietyLowSleep.toFixed(1)}/10 în zilele cu mai puțin de 6.5 ore de somn, comparativ cu ${avgAnxietyNormalSleep.toFixed(1)}/10 în cele cu somn suficient.`)
            });
        }
    }

    // Analyze High Energy/Mood Pattern (Cautious & Friendly language)
    const manicDays = entries.filter(e => e.mood >= 2);
    if (manicDays.length >= 1) {
        const avgSleepManic = manicDays.reduce((sum, e) => sum + e.sleep, 0) / manicDays.length;
        if (avgSleepManic < 6) {
            insights.push({
                type: 'alert',
                icon: '🔎',
                title: isEn ? 'A pattern worth monitoring was observed' : 'Am observat un tipar care merită urmărit',
                desc: isEn
                    ? `In the last ${currentChartPeriod} days, on days with an elevated state (+2 or higher), average sleep was lower (${avgSleepManic.toFixed(1)}h). If this pattern persists or concerns you, consider discussing it with your healthcare professional.`
                    : `În ultimele ${currentChartPeriod} zile, în zilele cu o stare mai ridicată (+2 sau peste), somnul mediu a fost mai scăzut (${avgSleepManic.toFixed(1)}h). Dacă acest tipar se repetă sau te îngrijorează, îți recomandăm să îl discuți cu medicul sau terapeutul tău.`
            });
        }
    }

    // Analyze Medication compliance vs mood stability
    const missedMedDays = entries.filter(e => !e.medicationTaken);
    if (missedMedDays.length > 0) {
        const dayWord = isEn ? (missedMedDays.length === 1 ? 'day' : 'days') : (missedMedDays.length === 1 ? 'zi' : 'zile');
        insights.push({
            type: 'alert',
            icon: '💊',
            title: isEn ? 'Treatment Monitoring' : 'Monitorizarea tratamentului',
            desc: isEn
                ? `You logged ${missedMedDays.length} ${dayWord} without medication in the last ${currentChartPeriod} days (${count} check-ins). Consistent adherence supports emotional balance.`
                : `Ai înregistrat ${missedMedDays.length} ${dayWord} fără tratament în ultimele ${currentChartPeriod} zile (${count} check-in-uri). Menținerea rutei de tratament sprijină stabilitatea emoțională.`
        });
    } else {
        insights.push({
            type: 'stable',
            icon: '🌱',
            title: isEn ? 'Consistent Treatment Adherence' : 'Tratament urmat consecvent',
            desc: isEn
                ? `You adhered to your treatment every day over the last ${currentChartPeriod} days (${count} check-ins).`
                : `Ai bifat tratamentul în fiecare zi din ultimele ${currentChartPeriod} zile (${count} check-in-uri).`
        });
    }

    // General Stable Streak
    const stableDays = entries.filter(e => e.mood === 0);
    if (stableDays.length >= 2) {
        insights.push({
            type: 'stable',
            icon: '⚖️',
            title: isEn ? `${stableDays.length} days of balance maintained` : `${stableDays.length} zile de echilibru menținut`,
            desc: isEn
                ? 'You maintained a stable state during this period. Keep up your healthy sleep habits.'
                : 'Ai menținut o stare stabilă în această perioadă. Continuă obiceiurile sănătoase de somn.'
        });
    }

    // Render insights list
    if (insights.length === 0) {
        list.innerHTML = `<div class="insight-card"><div class="insight-title">${t('insights_balanced_title')}</div><div class="insight-desc">${t('insights_balanced_desc')}</div></div>`;
    } else {
        insights.forEach(ins => {
            const card = document.createElement('div');
            card.className = `insight-card ${ins.type}`;
            card.innerHTML = `
                <div class="insight-card-top">
                    <span class="insight-title">${ins.icon ? ins.icon + ' ' : ''}${ins.title}</span>
                    <span class="confidence-badge ${confidenceBadgeClass}">${confidenceLabel}</span>
                </div>
                <div class="insight-desc">${ins.desc}</div>
                <div class="insight-footer">${t('insights_based_on').replace('{count}', count)}</div>
            `;
            list.appendChild(card);
        });
    }
}

// Change chart timeframe
function changeChartPeriod(days) {
    currentChartPeriod = days;
    
    // Toggle active button style
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.id === `filter-btn-${days}`) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    updateDashboard();
}

// Chart State
let currentChartMetric = 'mood'; // 'mood' | 'sleep' | 'anxiety' | 'energy' | 'all'

function setChartMetric(metric) {
    currentChartMetric = metric;
    
    // Update metric selector button states
    document.querySelectorAll('.metric-btn').forEach(btn => {
        if (btn.getAttribute('data-metric') === metric) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update main chart title and subtitle based on metric
    const titleEl = document.getElementById('chart-main-title');
    const subEl = document.getElementById('chart-main-sub');

    if (titleEl) titleEl.textContent = t(`chart_title_${metric}`);
    if (subEl) subEl.textContent = t(`chart_sub_${metric}`);

    const filteredEntries = getEntriesForPeriod(currentChartPeriod);
    drawCustomChart(filteredEntries);
    renderSparklines(filteredEntries);
}

function renderChartLegend() {
    const legendEl = document.getElementById('chart-legend');
    if (!legendEl) return;

    if (currentChartMetric === 'mood') {
        legendEl.innerHTML = `
            <span class="legend-item"><span class="legend-dot" style="background: #818cf8;"></span> ${t('legend_mood')}</span>
            <span class="legend-item"><span class="legend-dot" style="background: #10b981;"></span> ${t('legend_stability')}</span>
        `;
    } else if (currentChartMetric === 'sleep') {
        legendEl.innerHTML = `
            <span class="legend-item"><span class="legend-dot" style="background: #38bdf8;"></span> ${t('legend_sleep')}</span>
            <span class="legend-item"><span class="legend-dot" style="background: rgba(56, 189, 248, 0.25);"></span> ${t('legend_sleep_optimal')}</span>
        `;
    } else if (currentChartMetric === 'anxiety') {
        legendEl.innerHTML = `
            <span class="legend-item"><span class="legend-dot" style="background: #f59e0b;"></span> ${t('legend_anxiety')}</span>
            <span class="legend-item"><span class="legend-dot" style="background: rgba(16, 185, 129, 0.25);"></span> ${t('legend_comfort_zone')}</span>
        `;
    } else if (currentChartMetric === 'energy') {
        legendEl.innerHTML = `
            <span class="legend-item"><span class="legend-dot" style="background: #10b981;"></span> ${t('legend_energy')}</span>
        `;
    } else if (currentChartMetric === 'all') {
        legendEl.innerHTML = `
            <span class="legend-item"><span class="legend-dot" style="background: #818cf8;"></span> ${t('stat_mood_title')}</span>
            <span class="legend-item"><span class="legend-dot" style="background: #38bdf8;"></span> ${t('stat_sleep_title')}</span>
            <span class="legend-item"><span class="legend-dot" style="background: #f59e0b;"></span> ${t('stat_anxiety_title')}</span>
            <span class="legend-item"><span class="legend-dot" style="background: #10b981;"></span> ${t('stat_energy_title')}</span>
        `;
    }
}

function renderSparklines(entries) {
    const grid = document.getElementById('mini-sparklines-grid');
    if (!grid) return;

    if (!entries || entries.length === 0) {
        grid.style.display = 'none';
        return;
    }

    grid.style.display = 'grid';
    const lastEntry = entries[entries.length - 1];

    const moodValEl = document.getElementById('sparkline-val-mood');
    const sleepValEl = document.getElementById('sparkline-val-sleep');
    const anxietyValEl = document.getElementById('sparkline-val-anxiety');
    const energyValEl = document.getElementById('sparkline-val-energy');

    if (moodValEl) moodValEl.textContent = lastEntry.mood > 0 ? `+${lastEntry.mood}` : `${lastEntry.mood}`;
    if (sleepValEl) sleepValEl.textContent = `${lastEntry.sleep}h`;
    if (anxietyValEl) anxietyValEl.textContent = `${lastEntry.anxiety}/10`;
    if (energyValEl) energyValEl.textContent = `${lastEntry.energy}/10`;

    drawMiniSparkline('sparkline-canvas-mood', entries.map(e => e.mood), -5, 5, '#818cf8');
    drawMiniSparkline('sparkline-canvas-sleep', entries.map(e => e.sleep), 0, 16, '#38bdf8');
    drawMiniSparkline('sparkline-canvas-anxiety', entries.map(e => e.anxiety), 0, 10, '#f59e0b');
    drawMiniSparkline('sparkline-canvas-energy', entries.map(e => e.energy), 0, 10, '#10b981');
}

function drawMiniSparkline(canvasId, values, minY, maxY, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const width = rect.width || 120;
    const height = rect.height || 36;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    if (values.length < 2) return;

    const pad = 4;
    const w = width - pad * 2;
    const h = height - pad * 2;

    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();

    values.forEach((v, idx) => {
        const x = pad + (idx / (values.length - 1)) * w;
        const normY = (v - minY) / (maxY - minY);
        const y = height - pad - normY * h;
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });

    ctx.stroke();
}

// Canvas-based Calibrated Chart Engine
function drawCustomChart(entries) {
    const canvas = document.getElementById('mood-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Handle High DPI / Retina screen scaling & dynamic height
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const width = rect.width || 300;
    const height = rect.height || 280;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const isMobileCanvas = width < 480;
    const paddingLeft = isMobileCanvas ? 42 : 55;
    const paddingRight = isMobileCanvas ? 15 : 20;
    const paddingTop = isMobileCanvas ? 35 : 45;
    const paddingBottom = isMobileCanvas ? 30 : 40;

    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;

    let minY = -5, maxY = 5;
    let gridSteps = [];
    let lineColor = '#818cf8';
    let gradientStart = 'rgba(99, 102, 241, 0.22)';
    let formatLabel = (v) => v > 0 ? `+${v}` : `${v}`;

    if (currentChartMetric === 'mood') {
        minY = -5; maxY = 5;
        gridSteps = [-5, -3, 0, 3, 5];
        lineColor = '#818cf8';
        gradientStart = 'rgba(99, 102, 241, 0.22)';
        formatLabel = (v) => v === 0 ? t('chart_axis_stable') : v > 0 ? `+${v}` : `${v}`;
    } else if (currentChartMetric === 'sleep') {
        minY = 0; maxY = 16;
        gridSteps = [0, 4, 8, 12, 16];
        lineColor = '#38bdf8';
        gradientStart = 'rgba(56, 189, 248, 0.22)';
        formatLabel = (v) => `${v}h`;
    } else if (currentChartMetric === 'anxiety') {
        minY = 0; maxY = 10;
        gridSteps = [0, 3, 5, 8, 10];
        lineColor = '#f59e0b';
        gradientStart = 'rgba(245, 158, 11, 0.22)';
        formatLabel = (v) => `${v}`;
    } else if (currentChartMetric === 'energy') {
        minY = 0; maxY = 10;
        gridSteps = [0, 3, 5, 8, 10];
        lineColor = '#10b981';
        gradientStart = 'rgba(16, 185, 129, 0.22)';
        formatLabel = (v) => `${v}`;
    } else if (currentChartMetric === 'all') {
        minY = 0; maxY = 10;
        gridSteps = [0, 2.5, 5, 7.5, 10];
        formatLabel = (v) => `${v * 10}%`;
    }

    // Draw Grid Lines & Axis Labels
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    ctx.fillStyle = '#64748b';
    ctx.font = '500 10px Inter';
    ctx.textAlign = 'right';

    gridSteps.forEach(val => {
        const y = getYCoordinate(val, minY, maxY, chartHeight, paddingTop);
        ctx.beginPath();
        ctx.moveTo(paddingLeft, y);
        ctx.lineTo(width - paddingRight, y);
        ctx.stroke();

        ctx.fillText(formatLabel(val), paddingLeft - 6, y + 3);
    });

    // Draw Target / Reference Bands
    if (currentChartMetric === 'mood') {
        const stableY = getYCoordinate(0, -5, 5, chartHeight, paddingTop);
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(paddingLeft, stableY);
        ctx.lineTo(width - paddingRight, stableY);
        ctx.stroke();
    } else if (currentChartMetric === 'sleep') {
        const sleepTargetTop = getYCoordinate(9, 0, 16, chartHeight, paddingTop);
        const sleepTargetBottom = getYCoordinate(6.5, 0, 16, chartHeight, paddingTop);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.07)';
        ctx.fillRect(paddingLeft, sleepTargetTop, chartWidth, sleepTargetBottom - sleepTargetTop);
    } else if (currentChartMetric === 'anxiety') {
        const anxLowTop = getYCoordinate(3, 0, 10, chartHeight, paddingTop);
        const anxLowBottom = getYCoordinate(0, 0, 10, chartHeight, paddingTop);
        ctx.fillStyle = 'rgba(16, 185, 129, 0.06)';
        ctx.fillRect(paddingLeft, anxLowTop, chartWidth, anxLowBottom - anxLowTop);
    }

    // Map X & Y coordinates for each entry
    const points = [];
    const count = entries.length;

    entries.forEach((e, idx) => {
        const x = count === 1 
            ? paddingLeft + chartWidth / 2 
            : paddingLeft + (idx / (count - 1)) * chartWidth;
        
        let val = e.mood;
        if (currentChartMetric === 'sleep') val = e.sleep;
        else if (currentChartMetric === 'anxiety') val = e.anxiety;
        else if (currentChartMetric === 'energy') val = e.energy;

        points.push({
            x: x,
            y: getYCoordinate(val, minY, maxY, chartHeight, paddingTop),
            moodY: getYCoordinate(e.mood, -5, 5, chartHeight, paddingTop),
            sleepY: getYCoordinate(e.sleep, 0, 16, chartHeight, paddingTop),
            anxietyY: getYCoordinate(e.anxiety, 0, 10, chartHeight, paddingTop),
            energyY: getYCoordinate(e.energy, 0, 10, chartHeight, paddingTop),
            entry: e
        });
    });

    if (currentChartMetric !== 'all') {
        // Draw single metric line with gradient fill
        if (points.length > 1) {
            const areaGrad = ctx.createLinearGradient(0, paddingTop, 0, height - paddingBottom);
            areaGrad.addColorStop(0, gradientStart);
            areaGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            
            ctx.fillStyle = areaGrad;
            ctx.beginPath();
            ctx.moveTo(points[0].x, height - paddingBottom);
            points.forEach(p => ctx.lineTo(p.x, p.y));
            ctx.lineTo(points[points.length - 1].x, height - paddingBottom);
            ctx.closePath();
            ctx.fill();
        }

        // Main Stroke Line
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 3;
        ctx.beginPath();
        points.forEach((p, idx) => {
            if (idx === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
        });
        ctx.stroke();

        // Points
        points.forEach(p => {
            ctx.fillStyle = lineColor;
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        });
    } else {
        // Draw all 4 lines (Mood, Sleep, Anxiety, Energy)
        const drawLine = (getY, color, isDashed = false) => {
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            if (isDashed) ctx.setLineDash([4, 4]);
            else ctx.setLineDash([]);
            ctx.beginPath();
            points.forEach((p, idx) => {
                if (idx === 0) ctx.moveTo(p.x, getY(p));
                else ctx.lineTo(p.x, getY(p));
            });
            ctx.stroke();
            ctx.setLineDash([]);
        };

        drawLine(p => p.moodY, '#818cf8');
        drawLine(p => p.sleepY, '#38bdf8', true);
        drawLine(p => p.anxietyY, '#f59e0b', true);
        drawLine(p => p.energyY, '#10b981');
    }

    // X-Axis Date Labels
    ctx.fillStyle = '#64748b';
    ctx.font = '500 10px Inter';
    ctx.textAlign = 'center';

    points.forEach((p, idx) => {
        let drawLabel = true;
        if (count > 7 && currentChartPeriod === 30 && idx % 3 !== 0) drawLabel = false;
        if (count > 7 && currentChartPeriod === 90 && idx % 9 !== 0) drawLabel = false;
        
        if (drawLabel) {
            const dateObj = new Date(p.entry.date);
            const dayStr = dateObj.getDate().toString().padStart(2, '0');
            const monthStr = (dateObj.getMonth() + 1).toString().padStart(2, '0');
            ctx.fillText(`${dayStr}/${monthStr}`, p.x, height - paddingBottom + 18);
        }
    });

    renderChartLegend();
}

// Draw a placeholder state if no data
function drawPlaceholderChart(message) {
    if (!message) message = t('chart_placeholder');
    const canvas = document.getElementById('mood-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const width = rect.width || 300;
    const height = rect.height || 280;
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = '#64748b';
    ctx.font = '500 14px Inter';
    ctx.textAlign = 'center';
    ctx.fillText(message, width / 2, height / 2);
}

// Map value to Y coordinate in Canvas coordinates space
function getYCoordinate(value, minVal, maxVal, heightRange, topPad) {
    // Math: invert Y (since 0,0 is top left in Canvas)
    const pct = (value - minVal) / (maxVal - minVal);
    return topPad + heightRange - (pct * heightRange);
}

// Bipolar mood color mapper
function getMoodColor(val) {
    if (val === 5) return '#ec4899';
    if (val === 3) return '#d946ef';
    if (val === 1) return '#a855f7';
    if (val === 0) return '#10b981';
    if (val === -1) return '#3b82f6';
    if (val === -3) return '#1d4ed8';
    if (val === -5) return '#6366f1';
    return '#6366f1';
}

// History Filter State
let currentHistoryFilter = 'all';

function setHistoryFilter(filterId) {
    currentHistoryFilter = filterId;
    document.querySelectorAll('.history-filter-pill').forEach(btn => {
        if (btn.getAttribute('data-filter') === filterId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    renderHistory();
}

function filterHistory() {
    renderHistory();
}

// Render History Journal Entries List (Grouped by Month & Scannable Compact Cards)
function renderHistory() {
    const list = document.getElementById('history-list');
    if (!list) return;
    list.innerHTML = '';

    if (moodEntries.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <p>Nu există nicio înregistrare salvată până acum.</p>
                <button class="action-btn-primary" onclick="switchTab('log')">Fă primul check-in</button>
            </div>
        `;
        return;
    }

    const searchVal = (document.getElementById('history-search')?.value || '').toLowerCase().trim();

    // Filter entries based on search input and active filter pill
    const filtered = moodEntries.filter(e => {
        // Text search
        if (searchVal) {
            const matchNotes = e.notes && e.notes.toLowerCase().includes(searchVal);
            const matchDate = e.date.includes(searchVal);
            const matchSymptoms = e.symptoms && e.symptoms.some(s => s.toLowerCase().includes(searchVal));
            if (!matchNotes && !matchDate && !matchSymptoms) return false;
        }

        // Active analytical filter
        if (currentHistoryFilter === 'mood-low') return e.mood < 0;
        if (currentHistoryFilter === 'mood-stable') return e.mood === 0;
        if (currentHistoryFilter === 'mood-high') return e.mood > 0;
        if (currentHistoryFilter === 'sleep-low') return e.sleep < 6;
        if (currentHistoryFilter === 'anxiety-high') return e.anxiety > 6;
        if (currentHistoryFilter === 'med-missed') return !e.medicationTaken;

        return true;
    });

    if (filtered.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <p>Nicio înregistrare nu se potrivește filtrelor selectate.</p>
                <button class="action-btn-secondary btn-sm" onclick="setHistoryFilter('all')" style="margin-top:0.6rem">Resetează filtrele</button>
            </div>
        `;
        return;
    }

    // Sort newest first
    const sortedDesc = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));

    // Group by Month & Year (e.g. "AUGUST 2026")
    const groupedByMonth = {};
    sortedDesc.forEach(entry => {
        const dateObj = new Date(entry.date);
        const monthNamesRO = [
            "IANUARIE", "FEBRUARIE", "MARTIE", "APRILIE", "MAI", "IUNIE",
            "IULIE", "AUGUST", "SEPTEMBRIE", "OCTOMBRIE", "NOIEMBRIE", "DECEMBRIE"
        ];
        const monthYearKey = `${monthNamesRO[dateObj.getMonth()]} ${dateObj.getFullYear()}`;
        if (!groupedByMonth[monthYearKey]) {
            groupedByMonth[monthYearKey] = [];
        }
        groupedByMonth[monthYearKey].push(entry);
    });

    // Render grouped months
    Object.keys(groupedByMonth).forEach(monthKey => {
        const monthEntries = groupedByMonth[monthKey];

        const monthGroup = document.createElement('div');
        monthGroup.className = 'history-month-group';

        const monthHeader = document.createElement('div');
        monthHeader.className = 'history-month-header';
        monthHeader.innerHTML = `
            <span class="month-title">${monthKey}</span>
            <span class="month-count">${monthEntries.length} ${monthEntries.length === 1 ? 'check-in' : 'check-in-uri'}</span>
        `;
        monthGroup.appendChild(monthHeader);

        const itemsBox = document.createElement('div');
        itemsBox.className = 'history-items-box';

        monthEntries.forEach(e => {
            const dateObj = new Date(e.date);
            const dayNum = dateObj.getDate().toString().padStart(2, '0');
            const monthShortNamesRO = ["JAN", "FEB", "MAR", "APR", "MAI", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            const monthShort = monthShortNamesRO[dateObj.getMonth()];

            const moodSign = e.mood > 0 ? "+" : "";
            const moodValText = e.mood === 0 ? "0" : `${moodSign}${e.mood}`;

            // Build symptoms text preview
            let symptomsText = '';
            if (e.symptoms && e.symptoms.length > 0) {
                symptomsText = e.symptoms.map(s => getSymptomLabel(s)).join(', ');
            }

            const item = document.createElement('div');
            item.className = 'history-item-compact glass';
            item.setAttribute('data-id', e.date);
            item.onclick = () => showEntryDetailModal(e.date);

            item.innerHTML = `
                <div class="history-item-left">
                    <div class="history-date-badge">
                        <span class="day-num">${dayNum}</span>
                        <span class="month-name">${monthShort}</span>
                    </div>
                    <div class="history-metrics-row">
                        <span class="metric-chip mood-chip" style="background:${getMoodColor(e.mood)}">${moodValText}</span>
                        <span class="metric-chip sleep-chip">${e.sleep}h</span>
                        <span class="metric-chip anxiety-chip">anx. ${e.anxiety}</span>
                        <span class="metric-chip energy-chip">en. ${e.energy}</span>
                    </div>
                </div>

                <div class="history-item-right" onclick="event.stopPropagation()">
                    <div class="history-sub-info">
                        <span class="med-tag ${e.medicationTaken ? 'yes' : 'no'}">${e.medicationTaken ? '✓ Tratament' : '✗ Fără tratament'}</span>
                        ${symptomsText ? `<span class="symptoms-summary-tag">${symptomsText}</span>` : ''}
                    </div>
                    <div class="history-actions-inline">
                        <button class="btn-detail-link" onclick="showEntryDetailModal('${e.date}')">Vezi detalii →</button>
                        <button class="btn-edit-action" onclick="editEntry('${e.date}')">✏️ Editează</button>
                        <button class="btn-delete-action" onclick="deleteEntry('${e.date}')" title="Șterge">🗑️</button>
                    </div>
                </div>
            `;
            itemsBox.appendChild(item);
        });

        monthGroup.appendChild(itemsBox);
        list.appendChild(monthGroup);
    });
}

function showEntryDetailModal(dateStr) {
    const entry = moodEntries.find(e => e.date === dateStr);
    if (!entry) return;

    const modal = document.getElementById('entry-detail-modal');
    if (!modal) return;

    document.getElementById('detail-modal-date').textContent = formatDateRO(entry.date);
    
    const moodSign = entry.mood > 0 ? "+" : "";
    document.getElementById('detail-mood').textContent = entry.mood === 0 ? "0 (Stabil)" : `${moodSign}${entry.mood}`;
    document.getElementById('detail-sleep').textContent = `${entry.sleep}h`;
    document.getElementById('detail-anxiety').textContent = `${entry.anxiety} / 10`;
    document.getElementById('detail-energy').textContent = `${entry.energy} / 10`;
    document.getElementById('detail-medication').textContent = entry.medicationTaken 
        ? "✓ Am urmat tratamentul prescris astăzi" 
        : "✗ Nu am urmat tratamentul pentru această zi";

    // Symptoms
    const symptomsBox = document.getElementById('detail-symptoms-box');
    const symptomsList = document.getElementById('detail-symptoms-list');
    if (entry.symptoms && entry.symptoms.length > 0) {
        symptomsBox.style.display = 'block';
        symptomsList.innerHTML = entry.symptoms.map(s => `<span class="symptom-tag-pill">${capitalizeFirst(s)}</span>`).join('');
    } else {
        symptomsBox.style.display = 'none';
    }

    // Notes
    const notesBox = document.getElementById('detail-notes-box');
    const notesText = document.getElementById('detail-notes-text');
    if (entry.notes && entry.notes.trim()) {
        notesBox.style.display = 'block';
        notesText.textContent = entry.notes;
    } else {
        notesBox.style.display = 'none';
    }

    // Action buttons
    const btnEdit = document.getElementById('detail-btn-edit');
    const btnDelete = document.getElementById('detail-btn-delete');

    if (btnEdit) btnEdit.onclick = () => { closeEntryDetailModal(); editEntry(dateStr); };
    if (btnDelete) btnDelete.onclick = () => { closeEntryDetailModal(); deleteEntry(dateStr); };

    modal.style.display = 'flex';
}

function closeEntryDetailModal() {
    const modal = document.getElementById('entry-detail-modal');
    if (modal) modal.style.display = 'none';
}

// Capitalize helper
function capitalizeFirst(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).replace('_', ' ');
}

const SYMPTOM_LABELS_MAP = {
    'iritabilitate': 'Iritabilitate',
    'ganduri_accelerate': 'Gânduri accelerate',
    'agitatie_motorie': 'Agitație motorie',
    'tristete': 'Tristețe / Plâns',
    'lipsa_concentrare': 'Lipsă de concentrare',
    'retragere_sociala': 'Retragere socială',
    'atac_panica': 'Atac de panică',
    'impulsivitate': 'Impulsivitate',
    'insomnie_usoara': 'Insomnie / Somn tulburat',
    'oboseala': 'Oboseală accentuată',
};

function normalizeSymptomId(symptomId) {
    if (!symptomId || typeof symptomId !== 'string') return '';
    const trimmed = symptomId.trim().toLowerCase();
    const mapping = {
        'tristețe': 'tristete',
        'gânduri_accelerate': 'ganduri_accelerate',
        'agitație_motorie': 'agitatie_motorie',
        'retragere_socială': 'retragere_sociala',
        'atac_panică': 'atac_panica',
        'insomnie_ușoară': 'insomnie_usoara',
        'oboseală': 'oboseala',
    };
    const resolved = mapping[trimmed] || trimmed;
    return SYMPTOM_LABELS_MAP[resolved] ? resolved : '';
}

function getSymptomLabel(symptomId) {
    const normId = normalizeSymptomId(symptomId);
    return SYMPTOM_LABELS_MAP[normId] || capitalizeFirst(normId);
}

// Get text class helper
function getMoodTextClass(val) {
    if (val > 0) return 'mania-mild';
    if (val < 0) return 'depression-mild';
    return 'stable';
}

// Escape HTML safety function
function escapeHTML(text) {
    const div = document.createElement('div');
    div.innerText = text;
    return div.innerHTML;
}

// Delete entry handler
function deleteEntry(dateStr) {
    if (confirm(`Sigur dorești să ștergi definitiv înregistrarea din data de ${formatDateRO(dateStr)}?`)) {
        moodEntries = moodEntries.filter(e => e.date !== dateStr);
        saveEntriesToStorage();
        showToast("Înregistrarea a fost ștearsă.");
        
        // Refresh appropriate views
        const activeTab = document.querySelector('.nav-btn.active').id.replace('btn-', '');
        if (activeTab === 'history') {
            renderHistory();
        } else {
            updateDashboard();
        }
    }
}



// Backup & Export JSON data
function exportData() {
    const dataObj = {
        entries: moodEntries,
        safetyPlan: safetyPlan,
        exportDate: new Date().toISOString()
    };
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataObj, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `Staicumine_Backup_${toLocalDateString()}.json`);
    dlAnchorElem.click();
    
    // Save last backup date & update banner status
    localStorage.setItem('staicumine_last_backup_date', new Date().toISOString());
    checkBackupWarning();
    
    showToast("Datele au fost exportate cu succes!");
}

// Check if we should display backup warning banner
function checkBackupWarning() {
    const banner = document.getElementById('backup-warning-banner');
    const textWrapper = document.getElementById('backup-banner-text-wrapper');
    if (!banner) return;

    // If there is no data, no need to alert
    if (moodEntries.length === 0) {
        banner.style.display = 'none';
        return;
    }

    const lastBackupStr = localStorage.getItem('staicumine_last_backup_date') || localStorage.getItem('equilibrium_last_backup_date');
    const bannerClosedStr = localStorage.getItem('staicumine_backup_banner_closed_at') || localStorage.getItem('equilibrium_backup_banner_closed_at');
    const now = new Date();

    if (lastBackupStr) {
        const lastBackupDate = parseLocalDate(lastBackupStr);
        const day = lastBackupDate.getDate().toString().padStart(2, '0');
        const month = (lastBackupDate.getMonth() + 1).toString().padStart(2, '0');
        const year = lastBackupDate.getFullYear();
        
        if (textWrapper) {
            textWrapper.innerHTML = `<span class="backup-banner-text">🔒 Ultimul export: <strong>${day}.${month}.${year}</strong> <a href="#" onclick="exportData(); return false;" class="backup-link" style="margin-left:6px">(Exportă din nou)</a></span>`;
        }

        // If user closed banner recently, hide
        if (bannerClosedStr) {
            const bannerClosed = parseLocalDate(bannerClosedStr);
            const diffDays = Math.ceil(Math.abs(now - bannerClosed) / (1000 * 60 * 60 * 24));
            if (diffDays <= 7) {
                banner.style.display = 'none';
                return;
            }
        }
        banner.style.display = 'flex';
        return;
    }

    // Initial state before any export
    if (textWrapper) {
        textWrapper.innerHTML = `<span class="backup-banner-text">🔒 Datele sunt stocate local. <a href="#" onclick="exportData(); return false;" class="backup-link">Exportă un backup</a> pentru a evita pierderea lor.</span>`;
    }

    if (bannerClosedStr) {
        const bannerClosed = parseLocalDate(bannerClosedStr);
        const diffDays = Math.ceil(Math.abs(now - bannerClosed) / (1000 * 60 * 60 * 24));
        if (diffDays <= 7) {
            banner.style.display = 'none';
            return;
        }
    }

    banner.style.display = 'flex';
}

// Restore & Import backup
function validateAndNormalizeMoodEntry(rawEntry) {
    if (!rawEntry || typeof rawEntry !== 'object') return null;

    if (typeof rawEntry.date !== 'string') return null;
    const dateTrimmed = rawEntry.date.trim();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateTrimmed)) return null;

    const parsedDate = new Date(dateTrimmed + 'T00:00:00');
    if (isNaN(parsedDate.getTime())) return null;

    let moodNum = parseInt(rawEntry.mood, 10);
    if (isNaN(moodNum)) moodNum = 0;
    if (moodNum < -5) moodNum = -5;
    if (moodNum > 5) moodNum = 5;

    let sleepNum = parseFloat(rawEntry.sleep);
    if (isNaN(sleepNum) || sleepNum < 0) sleepNum = 7.0;
    if (sleepNum > 24) sleepNum = 24.0;
    sleepNum = parseFloat(sleepNum.toFixed(1));

    let anxietyNum = parseInt(rawEntry.anxiety, 10);
    if (isNaN(anxietyNum) || anxietyNum < 0) anxietyNum = 0;
    if (anxietyNum > 10) anxietyNum = 10;

    let energyNum = parseInt(rawEntry.energy, 10);
    if (isNaN(energyNum) || energyNum < 0) energyNum = 5;
    if (energyNum > 10) energyNum = 10;

    const medicationTaken = Boolean(rawEntry.medicationTaken);
    const notes = typeof rawEntry.notes === 'string' ? rawEntry.notes.trim() : '';

    let symptoms = [];
    if (Array.isArray(rawEntry.symptoms)) {
        symptoms = rawEntry.symptoms
            .map(s => normalizeSymptomId(s))
            .filter(s => typeof s === 'string' && s.length > 0);
        symptoms = [...new Set(symptoms)];
    }

    return {
        date: dateTrimmed,
        mood: moodNum,
        sleep: sleepNum,
        anxiety: anxietyNum,
        energy: energyNum,
        medicationTaken,
        notes,
        symptoms
    };
}

function importData(event) {
    const input = event.target;
    if (input.files.length === 0) return;

    const file = input.files[0];
    const reader = new FileReader();
    
    reader.onload = function() {
        try {
            const imported = JSON.parse(reader.result);
            
            // Validation
            if (imported && (Array.isArray(imported.entries) || Array.isArray(imported))) {
                const rawEntries = imported.entries || imported;
                const safety = imported.safetyPlan || {};
                
                // Sanitize and validate every incoming entry
                const validEntries = [];
                rawEntries.forEach(imp => {
                    const sanitized = validateAndNormalizeMoodEntry(imp);
                    if (sanitized) validEntries.push(sanitized);
                });

                if (validEntries.length === 0) {
                    alert("Fișierul JSON nu conține nicio înregistrare validă de jurnal.");
                    return;
                }

                if (confirm(`Fișierul conține ${validEntries.length} înregistrări valide. Această acțiune va îmbina datele importate cu cele actuale. Continuăm?`)) {
                    
                    // Merge logic (avoid duplicates on same date)
                    validEntries.forEach(impEntry => {
                        const idx = moodEntries.findIndex(e => e.date === impEntry.date);
                        if (idx !== -1) {
                            moodEntries[idx] = impEntry; // overwrite duplicate
                        } else {
                            moodEntries.push(impEntry); // insert new
                        }
                    });

                    if (safety.docName || safety.therapistName || safety.emergencyName) {
                        safetyPlan = { ...safetyPlan, ...safety };
                        localStorage.setItem('staicumine_safety_plan', JSON.stringify(safetyPlan));
                    }

                    // Exit demo mode & mark app initialized with real user data
                    isDemoMode = false;
                    localStorage.setItem('staicumine_is_demo', 'false');
                    localStorage.setItem('staicumine_initialized', 'true');

                    sortEntries();
                    saveEntriesToStorage();
                    showToast("Datele au fost importate cu succes!");
                    
                    // Reload UI
                    switchTab('dashboard');
                }
            } else {
                alert("Format JSON nevalid pentru restaurare.");
            }
        } catch (e) {
            alert("Eroare la citirea fișierului. Asigurați-vă că este un fișier JSON valid.");
        }
    };
    reader.readAsText(file);
}

// Purge Local Storage Data (Safe Targeted Key Removal)
function clearAllData() {
    if (confirm("ATENȚIE: Sigur dorești să ștergi DEFINITIV toate datele înregistrate? Această acțiune nu poate fi anulată!")) {
        if (confirm("Vă rugăm să confirmați încă o dată că doriți ștergerea completă a bazei de date locale.")) {
            // Remove Staicumine & legacy Equilibrium keys specifically (never call localStorage.clear()!)
            const keysToRemove = [
                'staicumine_mood_entries',
                'staicumine_safety_plan',
                'staicumine_initialized',
                'staicumine_is_demo',
                'staicumine_onboarding_done',
                'staicumine_checkin_draft',
                'staicumine_last_backup_date',
                'staicumine_backup_banner_closed_at',
                'equilibrium_mood_entries',
                'equilibrium_safety_plan',
                'equilibrium_is_demo',
                'equilibrium_last_backup_date',
                'equilibrium_backup_banner_closed_at'
            ];
            
            keysToRemove.forEach(key => localStorage.removeItem(key));

            moodEntries = [];
            safetyPlan = { docName: '', therapistName: '', emergencyName: '', triggers: '', coping: '' };
            
            // Reset input fields
            const docNameEl = document.getElementById('safety-doc-name');
            const therapistNameEl = document.getElementById('safety-therapist-name');
            const emergencyNameEl = document.getElementById('safety-emergency-name');
            const triggersEl = document.getElementById('safety-triggers');
            const copingEl = document.getElementById('safety-coping');

            if (docNameEl) docNameEl.value = '';
            if (therapistNameEl) therapistNameEl.value = '';
            if (emergencyNameEl) emergencyNameEl.value = '';
            if (triggersEl) triggersEl.value = '';
            if (copingEl) copingEl.value = '';
            
            showToast("Toate datele Staicumine au fost șterse definitiv.");
            switchTab('dashboard');
        }
    }
}

// SOS Modal
function openSOSModal() {
    const modal = document.getElementById('sos-modal');
    if (modal) modal.style.display = 'flex';
}

function closeSOSModal() {
    const modal = document.getElementById('sos-modal');
    if (modal) modal.style.display = 'none';
}

function autoExpandTextarea(textarea) {
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = Math.max(110, textarea.scrollHeight + 4) + 'px';
}

// On Application Init Load
window.addEventListener('DOMContentLoaded', () => {
    loadData();
    resetLogForm();
    initLanguage();
    updateDashboard();

    // Auto expand all textareas dynamically
    document.querySelectorAll('textarea').forEach(ta => {
        autoExpandTextarea(ta);
        ta.addEventListener('input', () => autoExpandTextarea(ta));
    });

    // Close modals on backdrop click
    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) {
                backdrop.style.display = 'none';
            }
        });
    });

    // Close mobile menu or modals on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
            closeSOSModal();
        }
    });

    // Listen to resize to make the canvas chart responsive
    window.addEventListener('resize', () => {
        const activeTab = document.querySelector('.nav-btn.active').id.replace('btn-', '');
        if (activeTab === 'dashboard') {
            updateDashboard();
        }
    });
});

// Helper: Toggle Mood Guide Accordion Panel
function toggleMoodGuide() {
    const panel = document.getElementById('mood-guide-panel');
    if (!panel) return;
    if (panel.style.display === 'none' || panel.style.display === '') {
        panel.style.display = 'block';
    } else {
        panel.style.display = 'none';
    }
}
function toggleMoodGuidePanel() {
    toggleMoodGuide();
}

// Close backup warning banner & hide it for 7 days
function closeBackupBanner() {
    localStorage.setItem('staicumine_backup_banner_closed_at', new Date().toISOString());
    const banner = document.getElementById('backup-warning-banner');
    if (banner) banner.style.display = 'none';
    showToast("Notificarea de backup a fost ascunsă pentru 7 zile.");
}

// Toggle Coping Suggestions Accordion Details
function toggleSuggestionDetail(id) {
    const content = document.getElementById(id);
    const chevron = document.getElementById(`chevron-${id}`);
    const header = content.previousElementSibling;
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        header.classList.add('active');
        chevron.textContent = '▲';
    } else {
        content.style.display = 'none';
        header.classList.remove('active');
        chevron.textContent = '▼';
    }
}

// Add Suggestion Text to Personal Coping strategies Textarea
function addSuggestionToCoping(keyOrText) {
    const copingTextarea = document.getElementById('safety-coping');
    if (!copingTextarea) return;

    const resolvedText = t(keyOrText);
    const currentVal = copingTextarea.value.trim();
    if (currentVal === '') {
        copingTextarea.value = resolvedText;
    } else {
        // Check if suggestion already exists to avoid duplicate spamming
        if (currentVal.includes(resolvedText)) {
            showToast(t('toast_suggestion_exists'));
            return;
        }
        copingTextarea.value = currentVal + "\n\n" + resolvedText;
    }

    // Trigger local state update and save
    safetyPlan.coping = copingTextarea.value;
    localStorage.setItem('staicumine_safety_plan', JSON.stringify(safetyPlan));
    showToast(t('toast_suggestion_added'));
}

// Interactive Breathing Exercise State Variables
let breathingIntervalId = null;
let isBreathingRunning = false;

function toggleBreathingExercise() {
    const circle = document.getElementById('breathing-circle');
    const instruction = document.getElementById('breathing-instruction');
    const timerText = document.getElementById('breathing-timer');
    const btn = document.getElementById('breathing-start-btn');

    if (!circle || !instruction || !timerText || !btn) return;

    if (isBreathingRunning) {
        // Stop exercise
        stopBreathingIfRunning();
    } else {
        // Start exercise
        isBreathingRunning = true;
        btn.textContent = t('safety_breathing_stop_btn');
        btn.classList.remove('action-btn-primary');
        btn.classList.add('action-btn-danger');
        showToast(t('breathing_toast_started'));

        runBreathingCycle(circle, instruction, timerText);
    }
}

function stopBreathingIfRunning() {
    if (!isBreathingRunning) return;
    
    clearInterval(breathingIntervalId);
    breathingIntervalId = null;
    isBreathingRunning = false;
    
    const circle = document.getElementById('breathing-circle');
    const instruction = document.getElementById('breathing-instruction');
    const timerText = document.getElementById('breathing-timer');
    const btn = document.getElementById('breathing-start-btn');
    
    if (circle && instruction && timerText && btn) {
        circle.className = 'breathing-circle';
        instruction.textContent = t('safety_breathing_ready');
        timerText.textContent = '';
        btn.textContent = t('safety_breathing_start_btn');
        btn.classList.remove('action-btn-danger');
        btn.classList.add('action-btn-primary');
    }
    showToast(t('breathing_toast_stopped'));
}

function runBreathingCycle(circle, instruction, timerText) {
    let currentState = 'inhale'; // states: inhale, hold, exhale
    let timerValue = 4;

    const updateUI = () => {
        circle.className = 'breathing-circle ' + currentState;
        timerText.textContent = timerValue;
        
        if (currentState === 'inhale') {
            instruction.textContent = t('safety_breathing_inhale');
        } else if (currentState === 'hold') {
            instruction.textContent = t('safety_breathing_hold');
        } else if (currentState === 'exhale') {
            instruction.textContent = t('safety_breathing_exhale');
        }
    };

    updateUI();

    breathingIntervalId = setInterval(() => {
        timerValue--;
        
        if (timerValue <= 0) {
            // State transitions
            if (currentState === 'inhale') {
                currentState = 'hold';
                timerValue = 7;
            } else if (currentState === 'hold') {
                currentState = 'exhale';
                timerValue = 8;
            } else if (currentState === 'exhale') {
                currentState = 'inhale';
                timerValue = 4;
            }
        }
        
        updateUI();
    }, 1000);
}

// Crisis Help Modal Handler
function openCrisisHelpModal() {
    const modal = document.getElementById('crisis-help-modal');
    if (!modal) return;

    const nameEl = document.getElementById('crisis-trust-name');
    const phoneLink = document.getElementById('crisis-trust-phone-link');

    if (typeof safetyPlan !== 'undefined' && safetyPlan && safetyPlan.emergencyName) {
        const contactVal = safetyPlan.emergencyName.trim();
        if (nameEl) nameEl.textContent = contactVal;
        if (phoneLink) {
            // Check if contactVal contains phone numbers
            const digitsMatch = contactVal.match(/[\d\s+()-]{5,}/);
            if (digitsMatch) {
                const phoneDigits = digitsMatch[0].replace(/[^\d+]/g, '');
                phoneLink.href = `tel:${phoneDigits}`;
                phoneLink.textContent = `📞 Sună (${phoneDigits})`;
            } else {
                phoneLink.href = "#";
                phoneLink.textContent = "📞 Sună";
            }
            phoneLink.onclick = null;
        }
    } else {
        if (nameEl) nameEl.textContent = t('crisis_trust_not_set');
        if (phoneLink) {
            phoneLink.href = "#";
            phoneLink.textContent = currentLanguage === 'en' ? "⚙️ Configure in Safety Plan" : "⚙️ Configurează în Plan";
            phoneLink.onclick = (e) => {
                e.preventDefault();
                closeCrisisHelpModal();
                switchTab('safety');
            };
        }
    }

    modal.style.display = 'flex';
}

function closeCrisisHelpModal() {
    const modal = document.getElementById('crisis-help-modal');
    if (modal) modal.style.display = 'none';
}

function startCrisisBreathing() {
    closeCrisisHelpModal();
    navigateToBreathingExercise();
}

function navigateToBreathingExercise() {
    switchTab('safety');
    setTimeout(() => {
        const targetElement = document.getElementById('breathing-widget-container') || document.querySelector('.actionable-guide-card') || document.getElementById('breathing-circle');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            targetElement.classList.add('highlight-pulse');
            setTimeout(() => targetElement.classList.remove('highlight-pulse'), 1500);
        }
        if (!breathingActive) {
            toggleBreathingExercise();
        }
    }, 250);
}

// Articles & Guides expand/collapse handler
function toggleGuideReadMore(guideId) {
    const content = document.getElementById(`guide-content-${guideId}`);
    const btn = document.getElementById(`btn-toggle-${guideId}`);
    const chevron = document.getElementById(`chevron-${guideId}`);
    if (!content || !btn) return;

    const spanText = btn.querySelector('span');

    if (content.style.display === 'none' || !content.style.display) {
        content.style.display = 'block';
        if (spanText) spanText.textContent = 'Ascunde articolul';
        if (chevron) chevron.style.transform = 'rotate(180deg)';
    } else {
        content.style.display = 'none';
        if (spanText) spanText.textContent = 'Citește articolul explicativ';
        if (chevron) chevron.style.transform = 'rotate(0deg)';
    }
}
