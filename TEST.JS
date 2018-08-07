
class Test extends Component {
    render() {
      //   let string = `
      //   AGRICULTURAL_ECONOMICS,
      // AGRONOMY,
      // ANIMAL_SCIENCES_AND_INDUSTRY,
      // COMMUNICATIONS_AND_AGRICULTURAL_EDUCATION,
      // AGRICULTURAL_EDUCATION,
      // ENTOMOLOGY,
      // FOOD_SCIENCE_INSTITUTE,
      // GRAIN_SCIENCE_AND_INDUSTRY,
      // HORTICULTURE_AND_NATURAL_RESOURCES,
      // PLANT_PATHOLOGY,
      // ARCHITECTURE,
      // INTERIOR_ARCHITECTURE_AND_PRODUCT_DESIGN,
      // LANDSCAPE_ARCHITECTURE_REGIONAL_AND_COMMUNITY_PLANNING,
      // AEROSPACE_STUDIES_AIR_FORCE_ROTC,
      // AMERICAN_ETHNIC_STUDIES,
      // ART,
      // BIOCHEMISTRY_AND_MOLECULAR_BIOPHYSICS,
      // BIOLOGY,
      // CHEMISTRY,
      // COMMUNICATION_STUDIES,
      // ECONOMICS,
      // ENGLISH,
      // GENDER_WOMEN_AND_SEXUALITY_STUDIES,
      // GEOGRAPHY,
      // GEOLOGY,
      // HISTORY,
      // JOURNALISM_AND_MASS_COMMUNICATIONS,
      // MATHEMATICS,
      // MILITARY_SCIENCE_ARMY_ROTC,
      // MODERN_LANGUAGES,
      // MUSIC_AND_THEATRE,
      // PHILOSOPHY,
      // PHYSICS,
      // POLITICAL_SCIENCE,
      // PSYCHOLOGICAL_SCIENCES,
      // SOCIOLOGY,
      // STATISTICS,
      // ACCOUNTING,
      // FINANCE,
      // MANAGEMENT,
      // MARKETING,
      // CURRICULUM_AND_INSTRUCTION,
      // EDUCATIONAL_LEADERSHIP,
      // SPECIAL_EDUCATION,
      // ARCHITECTURAL_ENGINEERING_AND_CONSTRUCTION_SCIENCE,
      // BIOLOGICAL_AND_AGRICULTURAL_ENGINEERING,
      // CHEMICAL_ENGINEERING,
      // CIVIL_ENGINEERING,
      // COMPUTER_SCIENCE,
      // ELECTRICAL_AND_COMPUTER_ENGINEERING,
      // INDUSTRIAL_AND_MANUFACTURING_SYSTEMS_ENGINEERING,
      // MECHANICAL_AND_NUCLEAR_ENGINEERING,
      // APPAREL_TEXTILES_AND_INTERIOR_DESIGN,
      // CENTER_ON_AGING,
      // FAMILY_STUDIES_AND_HUMAN_SERVICES,
      // FOOD_NUTRITION_DIETETICS_AND_HEALTH,
      // GERONTOLOGY,
      // HOSPITALITY_MANAGEMENT,
      // KINESIOLOGY,
      // ANATOMY_AND_PHYSIOLOGY,
      // CLINICAL_SCIENCES,
      // DIAGNOSTIC_MEDICINE_PATHOBIOLOGY
      //   `
      //   let arr = string.split(',')
      //   arr = arr.map(entry => entry.replace(/\n/gi, ''))
      //   arr = arr.map(entry => entry.trim())
      //   console.log(arr)
      const ag = [
        'AGRICULTURAL_ECONOMICS',
        'AGRONOMY',
        'ANIMAL_SCIENCES_AND_INDUSTRY',
        'COMMUNICATIONS_AND_AGRICULTURAL_EDUCATION',
        'AGRICULTURAL_EDUCATION',
        'ENTOMOLOGY',
        'FOOD_SCIENCE_INSTITUTE',
        'GRAIN_SCIENCE_AND_INDUSTRY',
        'HORTICULTURE_AND_NATURAL_RESOURCES',
        'PLANT_PATHOLOGY'
      ]
      const arch = ['ARCHITECTURE', 'INTERIOR_ARCHITECTURE_AND_PRODUCT_DESIGN', 'LANDSCAPE_ARCHITECTURE_REGIONAL_AND_COMMUNITY_PLANNING']
      const arsci = [
        'AMERICAN_ETHNIC_STUDIES',
        'ART',
        'BIOCHEMISTRY_AND_MOLECULAR_BIOPHYSICS',
        'BIOLOGY',
        'CHEMISTRY',
        'COMMUNICATION_STUDIES',
        'ECONOMICS',
        'ENGLISH',
        'GENDER_WOMEN_AND_SEXUALITY_STUDIES',
        'GEOGRAPHY',
        'GEOLOGY',
        'HISTORY',
        'JOURNALISM_AND_MASS_COMMUNICATIONS',
        'MATHEMATICS',
        'MILITARY_SCIENCE_ARMY_ROTC',
        'MODERN_LANGUAGES',
        'MUSIC_AND_THEATRE',
        'PHILOSOPHY',
        'PHYSICS',
        'POLITICAL_SCIENCE',
        'PSYCHOLOGICAL_SCIENCES',
        'SOCIOLOGY',
        'STATISTICS'
      ]
      const bus = ['ACCOUNTING', 'FINANCE', 'MANAGEMENT', 'MARKETING']
      const ed = ['CURRICULUM_AND_INSTRUCTION', 'EDUCATIONAL_LEADERSHIP', 'SPECIAL_EDUCATION']
      const eng = [
        'ARCHITECTURAL_ENGINEERING_AND_CONSTRUCTION_SCIENCE',
        'BIOLOGICAL_AND_AGRICULTURAL_ENGINEERING',
        'CHEMICAL_ENGINEERING',
        'CIVIL_ENGINEERING',
        'COMPUTER_SCIENCE',
        'ELECTRICAL_AND_COMPUTER_ENGINEERING',
        'INDUSTRIAL_AND_MANUFACTURING_SYSTEMS_ENGINEERING',
        'MECHANICAL_AND_NUCLEAR_ENGINEERING'
      ]
      const eco = [
        'APPAREL_TEXTILES_AND_INTERIOR_DESIGN',
        'CENTER_ON_AGING',
        'FAMILY_STUDIES_AND_HUMAN_SERVICES',
        'FOOD_NUTRITION_DIETETICS_AND_HEALTH',
        'GERONTOLOGY',
        'HOSPITALITY_MANAGEMENT',
        'KINESIOLOGY'
      ]
      const vet = ['ANATOMY_AND_PHYSIOLOGY', 'CLINICAL_SCIENCES', 'DIAGNOSTIC_MEDICINE_PATHOBIOLOGY']
  
  
      
      let k = false
      if (k)
        vet.forEach(dept => {
          client.mutate({
            mutation: gql`
            mutation {
              createDepartment(
                data: { name: ${dept}, college: { connect: { id: "cjkizmodq001p0974e37l7sn4" } } }
              ) {
                id
                name
                college {
                  id
                  name
                }
              }
            }
          `
          })
        })
      return <span>test</span>
    }
  }