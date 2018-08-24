import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { client } from '../../App'
import gql from 'graphql-tag'
import data from './Catalog.json'
import { Segment } from 'semantic-ui-react'

export default class AddNewCourses extends Component {
  getNamingID(name) {
    switch (name) {
      case 'ACCTG':
        return 'cjkxcv9b60af30994gg0kbkkl'

      case 'AGCOM':
        return 'cjkxcv9ew0af80994azd1q69n'

      case 'AFRI':
        return 'cjkxcv9ez0afb09944zvk0z6f'

      case 'AGED':
        return 'cjkxcv9f50afe09949g9eflhj'

      case 'AERO':
        return 'cjkxcv9f60afg0994mhbk4j2j'

      case 'AGEC':
        return 'cjkxcv9f60afi099429zurc8q'

      case 'AGRON':
        return 'cjkxcv9fn0afl0994jx4a37jb'

      case 'AMETH':
        return 'cjkxcv9km0afq09947zypm3ij'

      case 'ANTH':
        return 'cjkxcv9kq0afs0994hvdhep7e'

      case 'ARAB':
        return 'cjkxcv9l30afw0994xfb4y1u9'

      case 'ARE':
        return 'cjkxcv9lc0afz0994d3edhrwg'

      case 'AP':
        return 'cjkxcv9lp0ag10994xpb6753o'

      case 'ARCH':
        return 'cjkxcv9n60ag30994aw19bw09'

      case 'ART':
        return 'cjkxcv9tx0ag60994my1miw40'

      case 'ASI':
        return 'cjkxcv9v30ag90994ltzfs2ai'

      case 'AT':
        return 'cjkxcv9vg0agc0994prh3trxd'

      case 'ATM':
        return 'cjkxcv9vx0agf0994cvlh2s64'

      case 'AVT':
        return 'cjkxcv9w20agi0994ehhz11mc'

      case 'AVM':
        return 'cjkxcv9wi0agl0994fwlrtpwi'

      case 'BAE':
        return 'cjkxcv9y10ago0994d8xzw9io'

      case 'BIOCH':
        return 'cjkxcva0z0agr0994qppuxk2x'

      case 'BME':
        return 'cjkxcva1z0agu099451d7s37f'

      case 'BIOL':
        return 'cjkxcva2w0agx09948xdnm2sd'

      case 'CDPLN':
        return 'cjkxcva310ah009945jcwicbz'

      case 'BUS':
        return 'cjkxcva3b0ah40994t9ia5aum'

      case 'CE':
        return 'cjkxcva3c0ah60994ig25e3sl'

      case 'CET':
        return 'cjkxcva5b0ah90994g1eviqm4'

      case 'CHINE':
        return 'cjkxcva6n0ahd0994onedgqjl'

      case 'CHE':
        return 'cjkxcva6n0ahf0994e2d834th'

      case 'CHM':
        return 'cjkxcva6z0ahi0994sbloorrl'

      case 'CIS':
        return 'cjkxcva770ahl0994q7vvcsxa'

      case 'CLSCS':
        return 'cjkxcva790aho09942s68f3qz'

      case 'CMST':
        return 'cjkxcva7p0ahr09949s6u3tb9'

      case 'CNS':
        return 'cjkxcvaby0ahv0994owg6ctf1'

      case 'CNRES':
        return 'cjkxcvac40ahx09947iwipnji'

      case 'COMM':
        return 'cjkxcvack0ai10994un4ovwsq'

      case 'COT':
        return 'cjkxcvacp0ai30994o9apwxzy'

      case 'CS':
        return 'cjkxcvacz0ai609944hcpzs7k'

      case 'CSD':
        return 'cjkxcvad90ai90994ukqltsyg'

      case 'CZECH':
        return 'cjkxcvaey0aic0994e3tagy6i'

      case 'DAS':
        return 'cjkxcvafv0aih0994uu7t8r9z'

      case 'DANCE':
        return 'cjkxcvafv0aii0994y5awsmt5'

      case 'DED':
        return 'cjkxcvags0ail09943b4kbpv9'

      case 'DMP':
        return 'cjkxcvaij0aiq0994mm3eauvr'

      case 'DHE':
        return 'cjkxcvain0ait0994n66jq2sa'

      case 'ECE':
        return 'cjkxcvair0aiw09946oih1w2z'

      case 'DEN':
        return 'cjkxcvais0aiy0994ab8alq08'

      case 'DIGME':
        return 'cjkxcvait0aj009948rktfg8q'

      case 'ECED':
        return 'cjkxcvaj60aj30994p8haygtb'

      case 'ECET':
        return 'cjkxcvao00aj60994pnw3w58q'

      case 'ECON':
        return 'cjkxcvao70aj90994d1jvxkyv'

      case 'EDCI':
        return 'cjkxcvaoj0ajd09940ybdx3h8'

      case 'EDACE':
        return 'cjkxcvaom0ajg0994buuozjzz'

      case 'EDEL':
        return 'cjkxcvaov0ajj0994oqlwgzpj'

      case 'EDCEP':
        return 'cjkxcvap10ajl0994b6p1uplg'

      case 'EDLEA':
        return 'cjkxcvasq0ajo09941tfaqmb9'

      case 'EDSP':
        return 'cjkxcvatv0ajs0994nsapx2cy'

      case 'EDSEC':
        return 'cjkxcvau10ajv09940fwmlu79'

      case 'ENGL':
        return 'cjkxcvau10ajx0994kinc66ue'

      case 'ENTOM':
        return 'cjkxcvau40ak00994u2fwef4t'

      case 'ENTRP':
        return 'cjkxcvauq0ak30994vad0w5hb'

      case 'ENVD':
        return 'cjkxcvaw70ak609942p73uzk2'

      case 'ET':
        return 'cjkxcvayo0ak90994b09za9kn'

      case 'ETA':
        return 'cjkxcvb0b0akd0994mub7fwv8'

      case 'FDSCI':
        return 'cjkxcvb0j0akg0994e5zh8c56'

      case 'FINAN':
        return 'cjkxcvb0p0akj0994wgn92l04'

      case 'ETB':
        return 'cjkxcvb0r0akl09943zjc973r'

      case 'FNDH':
        return 'cjkxcvb210ako0994b3825jdy'

      case 'FOR':
        return 'cjkxcvb2e0akr0994l8tkcman'

      case 'FREN':
        return 'cjkxcvb3w0aku0994wcm7ysbi'

      case 'FSHS':
        return 'cjkxcvb5y0akx0994r6gjlq61'

      case 'GENAG':
        return 'cjkxcvb650al00994nnf9akns'

      case 'GEOL':
        return 'cjkxcvb6f0al50994wo7yvqo3'

      case 'GEOG':
        return 'cjkxcvb6h0al70994vmceu8j7'

      case 'GENBA':
        return 'cjkxcvb6h0al90994hdpf2wiv'

      case 'GERON':
        return 'cjkxcvb8p0alc0994s7kurwq6'

      case 'GRAD':
        return 'cjkxcvb9j0alf0994j6jb03e8'

      case 'GNHE':
        return 'cjkxcvb9m0alj09948g17un9r'

      case 'GRSC':
        return 'cjkxcvb9q0aln0994c2dyhtfl'

      case 'GREEK':
        return 'cjkxcvb9s0alp09942pv8jqcn'

      case 'GRMN':
        return 'cjkxcvba40alr0994sdw3mmve'

      case 'GWSS':
        return 'cjkxcvbbc0alu09947r6qk8f6'

      case 'HINDI':
        return 'cjkxcvbcd0aly0994ltr6idm8'

      case 'HIST':
        return 'cjkxcvbck0am10994pyseo5fs'

      case 'HM':
        return 'cjkxcvbco0am40994dbup1wox'

      case 'HDFS':
        return 'cjkxcvbct0am60994a77kv5pe'

      case 'HORT':
        return 'cjkxcvbd80am90994jfqq5ppn'

      case 'IAPD':
        return 'cjkxcvbee0amc0994bv3te1sb'

      case 'ID':
        return 'cjkxcvbhb0amf09949mp5an8p'

      case 'IMSE':
        return 'cjkxcvbhe0ami0994jp8f3ibi'

      case 'ITAL':
        return 'cjkxcvbhm0amm0994tvhh8q96'

      case 'JAPAN':
        return 'cjkxcvbhn0amp0994i33m4004'

      case 'KIN':
        return 'cjkxcvbho0amr09943tjbfy6t'

      case 'LAR':
        return 'cjkxcvbio0amu0994db9bij8b'

      case 'LATIN':
        return 'cjkxcvblb0amx0994udndtem6'

      case 'LEAD':
        return 'cjkxcvblp0an009946h766awi'

      case 'LG':
        return 'cjkxcvblv0an30994ah9yoeau'

      case 'LING':
        return 'cjkxcvbm40an60994c1o44cc5'

      case 'LSHD':
        return 'cjkxcvbm70an90994tzxd9vah'

      case 'MANGT':
        return 'cjkxcvbmw0anc099485i9q20h'

      case 'MATH':
        return 'cjkxcvbom0anf0994oa18hnjk'

      case 'MC':
        return 'cjkxcvbpl0ani0994d65774je'

      case 'ME':
        return 'cjkxcvbqe0anl0994knkbdsis'

      case 'MIS':
        return 'cjkxcvbrd0anp0994crzzxd2x'

      case 'MET':
        return 'cjkxcvbre0anr0994ekhji7p4'

      case 'MKTG':
        return 'cjkxcvbrr0anu0994x6thssay'

      case 'MLANG':
        return 'cjkxcvbru0anx09948asp0q78'

      case 'MSCI':
        return 'cjkxcvbsf0ao00994g8ypvogg'

      case 'MUSIC':
        return 'cjkxcvbt00ao30994dplv1mbo'

      case 'NE':
        return 'cjkxcvbtu0ao60994daez9mx1'

      case 'PFP':
        return 'cjkxcvbu40ao90994waajzvo5'

      case 'PHILO':
        return 'cjkxcvbub0aoc0994j6zk07rd'

      case 'PHYS':
        return 'cjkxcvbv30aof0994ovhdt66a'

      case 'PLAN':
        return 'cjkxcvbvc0aoi0994w20e3uld'

      case 'PLPTH':
        return 'cjkxcvbvn0aol0994u65hx5ay'

      case 'PMC':
        return 'cjkxcvbwl0aoo0994jsbxepgl'

      case 'POLSC':
        return 'cjkxcvbx20aor0994kux3pj8i'

      case 'PORT':
        return 'cjkxcvbxe0aou0994j94lsbne'

      case 'PPIL':
        return 'cjkxcvbyt0aox0994vp1gsnt5'

      case 'PSYCH':
        return 'cjkxcvbzb0ap00994adau6xal'

      case 'RRES':
        return 'cjkxcvbzn0ap30994qhiu2olo'

      case 'RUSSN':
        return 'cjkxcvc0c0ap609949gulamx1'

      case 'SOCIO':
        return 'cjkxcvc0s0ap90994uz4kqqgg'

      case 'SOCWK':
        return 'cjkxcvc270apc0994tiri6fu2'

      case 'SPAN':
        return 'cjkxcvc2j0apf0994y3xeslcc'

      case 'STAT':
        return 'cjkxcvc6d0api09943en0irl9'

      case 'SWAH':
        return 'cjkxcvc6s0apl0994ayj4h5ee'

      case 'THTRE':
        return 'cjkxcvc700apo0994kfbf21dr'

      case 'UHP':
        return 'cjkxcvc7l0apr0994ervb43ky'

      case 'WOEM':
        return 'cjkxcvc7w0apu0994pnjhs8om'

      case 'UAS':
        return 'cjkxcvc7z0apx0994r6ycfpak'

      default:
        return 'cjky6616003gb0948irzpu8kc'
    }
  }

  getKSU8ID(req) {
    switch (req) {
      case 'Aesthetic Interpretation':
        return 'cjkj10vd000f10974fzpxrdi4'

      case 'Empirical and Quantitative Reasoning':
        return 'cjkj3d9a0000u096749z1exsc'

      case 'Ethical Reasoning and Responsibility':
        return 'cjkj3diqt000y09676znjxd4e'

      case 'Global Issues and Perspectives':
        return 'cjkj3dq5s001209679hv1k01b'

      case 'Historical Perspectives':
        return 'cjkj3dyi300160967tceo8463'

      case 'Human Diversity within the U.S.':
        return 'cjkj3e96x001a0967a53gdgly'

      case 'Natural and Physical Sciences':
        return 'cjkj3ei15001e09678ubixi4b'

      case 'Social Sciences':
        return 'cjkj3eok3001i0967ljmj7735'
    }
  }

  render() {
    let k = true
    if (k) {
      data.map((i, index) => {
        let { courseName, description, courseNumber, kstate8, typicallyOffered, uge, requisites, courseDepartment, credits } = i
        let options = []

        if (Array.isArray(kstate8) && kstate8.length > 0) {
          kstate8.map(req => options.push(this.getKSU8ID(req)))
        }
        console.log('test', options)
        // optionsX.map(ksu =>
        //   client.mutate({
        //     mutation: MUTATION_2,
        //     variables: {
        //       degreeProgramID: ksu,
        //       courseID: getCourseIDByName(courseName)
        //     }
        //   })
        // )
        // console.log(index)
        if (1 === 3)
          // if (index < 30)
          return client
            .mutate({
              mutation: MUTATION,
              variables: {
                name: courseName.length ? courseName : 'null course name',
                description: description.length ? description : 'null description',
                courseNumber: courseNumber > 0 ? courseNumber : -1,
                typical: {
                  set: typicallyOffered.length ? typicallyOffered.filter(unit => ['FALL', 'SPRING', 'SUMMMER'].includes(unit)) : []
                },
                uge: uge ? uge : false,
                prerequisiteString: requisites.prerequisites,
                corequisiteString: requisites.corequisites,
                namingID:
                  this.getNamingID(courseDepartment).length > 0 ? this.getNamingID(courseDepartment) : 'cjky6616003gb0948irzpu8kc',
                credits: credits.length ? credits : '-1'
              }
            })
            .then(data => {
              const id = data.data.createCourse.id || 0
              // let options = []
              kstate8.map(req => {
                let k = this.getKSU8ID(req) || 'zer0'
                if (k != 'zer0') options.push(k)
                else console.log('ERR0 : ', req, id)
              })
              // kstate8.map(req =>
              //   client.mutate({
              //     mutation: MUTATION_2,
              //     variables: {
              //       degreeProgramID: this.getKSU8ID(req),
              //       courseID: id
              //     }
              //   })
              // )
            })
      })
    }
    return (
      //   <Mutation mutation={MUTATION}>
      // {({ data }, addNewCourse) => {
      //   if (data)
      // return (
      <Segment>
        <span>lol32</span>
      </Segment>
      //         )
      //       return null
      //     }}
      //   </Mutation>
    )
  }
}

const MUTATION = gql`
  mutation(
    $name: String!
    $courseNumber: Int!
    $namingID: ID!
    $credits: String!
    $description: String!
    # $typical: CourseCreatetypicalOfferingInput!
    $uge: Boolean!
    $prerequisiteString: String!
    $corequisiteString: String! # $ksu8ids: ID!
  ) {
    createCourse(
      data: {
        name: $name
        description: $description
        number: $courseNumber
        # typicalOffering: $typical
        uge: $uge
        prerequisiteString: $prerequisiteString
        corequisiteString: $corequisiteString
        naming: { connect: { id: $namingID } }
        # degreeProgramRequirements: { connect: { id: $ksu8ids } }
        credits: $credits
      }
    ) {
      id
      name
    }
  }
`

const MUTATION_2 = gql`
  mutation($degreeProgramID: ID!, $courseID: ID!) {
    updateDegreeProgramRequirement(where: { id: $degreeProgramID }, data: { courseOptions: { connect: { id: $courseID } } }) {
      id
    }
  }
`
