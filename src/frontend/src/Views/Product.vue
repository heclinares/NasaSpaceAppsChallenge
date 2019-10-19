<template>
  <div>
    <!-- TOP IMAGE SECTION 'BANNER' -->
    <div class="banner" style="position: relative; top: 0; z-index: 0;">
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" style="position: relative !important;">
        <div class="carousel-inner" role="listbox" style="overflow: visible">
          <div class="item active home-bg" :style="style">
            <div class="clearfix"></div>
            <div class="carousel-caption banner-slider-inner banner-top-align col-sm-10" style="position: relative; margin-top: 4%">
              <div class="top-content-container text-left" style="margin-left: 10%">
                <!-- TITLE, SUBTITLE ZONE -->
                <h1 style="color: #011627; text-shadow: none; line-height: 1; margin-bottom: 20px;" data-animation="animated fadeInDown delay-05s">
                  <img src="/static/img/mobile_icon.png" style="width: 75px; float: left; margin-top: -7px;" />
                {{ product.brand }} {{ product.name }}<br>
                <span class="small" style="font-size: smaller">{{ product.type }}</span></h1>
                
                
                <div class="row">
                  <div id="cycle-steps">
                    <div class="cycle-step active w-20" @click="section = 'extraction'">
                      Extraction
                    </div><div class="cycle-step active2 w-20" @click="section = 'manufacture'">
                      Manufacture
                    </div><div class="cycle-step w-20" @click="section = 'transport'">
                      Transport
                    </div><div class="cycle-step w-20" @click="section = 'selling'">
                      Selling
                    </div><div class="cycle-step last w-20" @click="section = 'recycling'">
                      Recycling
                    </div>
                  </div>
                </div>
                
                <div id="product-extraction" class="product-section" v-if="section === 'extraction'">
                  <div class="row card" style="">
                    <div class="col-12 card-header">
                      <h3>
                        Extraction info
                      </h3>
                    </div>
                    <div class="col-12 card-content">
                      Extraction date: {{ product.extraction.date }}<br/>
                    </div>
                  </div>
                  
                  <div class="row card">
                    <div class="col-12 card-header">
                      <h3>
                        Materials
                      </h3>
                    </div>
                    <div class="col-12 card-content">
                      <div class="row">
                        <div class="col-3 strong">
                          Material
                        </div>
                        <div class="col-2 strong">
                          Amount
                        </div>
                        <div class="col-3 strong">
                          Company
                        </div>
                        <div class="col-4 strong">
                          Method
                        </div>
                      </div>
                    </div>
                    <div class="col-12 card-content" v-for="material in product.extraction.rawMaterials">
                      <div class="row">
                        <div class="col-3">
                          {{ material.name }}
                        </div>
                        <div class="col-2">
                          {{ material.amount }} {{ material.unit }}
                        </div>
                        <div class="col-3">
                          {{ material.company }}
                        </div>
                        <div class="col-4">
                          {{ material.process }}
                        </div>
                      </div>
                    </div>
                  </div>
                   <div class="clearfix"></div>
                </div>
                
                <div id="product-manufacture" class="product-section" v-if="section === 'manufacture'">
                  <div class="row card" style="">
                    <div class="col-12 card-header">
                      <h3>
                        Producer info
                      </h3>
                    </div>
                    <div class="col-12 card-content">
                      Company: {{ product.manufacture.company }}<br/>
                      Production date: {{ product.manufacture.date }}<br/>
                    </div>
                  </div>
                  
                  <div class="row card">
                    <div class="col-12 card-header">
                      <h3>
                        Manufacture processes
                      </h3>
                    </div>
                    <div class="col-12 card-content">
                      <div class="row">
                        <div class="col-4 strong">
                          Process
                        </div>
                        <div class="col-4 strong">
                          Location
                        </div>
                        <div class="col-4 strong">
                          Date
                        </div>
                      </div>
                    </div>
                    <div class="col-12 card-content" v-for="process in product.manufacture.process">
                      <div class="row">
                        <div class="col-4">
                          {{ process.name }}
                        </div>
                        <div class="col-4">
                          {{ process.location }}
                        </div>
                        <div class="col-4">
                          {{ process.date }}
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                   <div class="clearfix"></div>
                </div>
                
                <div id="product-transport" class="product-section" v-if="section === 'transport'">
                  <div class="row card">
                    <div class="col-12 card-header">
                      <h3>
                        Transport
                      </h3>
                    </div>
                    <div class="col-12 card-content">
                      <div class="row">
                        <div class="col-3 strong">
                          Method
                        </div>
                        <div class="col-2 strong">
                          Kms
                        </div>
                        <div class="col-3 strong">
                          Dates
                        </div>
                        <div class="col-4 strong">
                          From / To
                        </div>
                      </div>
                    </div>
                    <div class="col-12 card-content" v-for="transport in product.transport">
                      <div class="row">
                        <div class="col-3">
                          {{ transport.company }}
                        </div>
                        <div class="col-2">
                          {{ transport.kms }} km
                        </div>
                        <div class="col-3">
                          {{ transport.startDate }}<br/>{{ transport.endDate }}
                        </div>
                        <div class="col-4">
                          {{ transport.locationFrom }}<br/>{{ transport.locationTo }}
                        </div>
                      </div>
                    </div>
                  </div>
                   <div class="clearfix"></div>
                </div>
                
                <div id="product-selling" class="product-section" v-if="section === 'selling'">
                  <div class="row card">
                    <div class="col-12 card-header">
                      <h3>
                        Selling process
                      </h3>
                    </div>
                    <div class="col-12 card-content">
                      <div class="row">
                        <div class="col-3 strong">
                          Company
                        </div>
                        <div class="col-3 strong">
                          Date
                        </div>
                        <div class="col-6 strong">
                          Bought by
                        </div>
                      </div>
                    </div>
                    <div class="col-12 card-content">
                      <div class="row">
                        <div class="col-3">
                          {{ product.selling.company }}
                        </div>
                        <div class="col-3">
                          {{ product.selling.date }}
                        </div>
                        <div class="col-6">
                          {{ product.selling.boughtBy }}
                        </div>
                      </div>
                    </div>
                  </div>
                   <div class="clearfix"></div>
                </div>
                
                <div id="product-recycling" class="product-section" v-if="section === 'recycling'">
                  <div class="row card">
                    <div class="col-12 card-header">
                      <h3>
                        Materials
                      </h3>
                    </div>
                    <div class="col-12 card-content">
                      <div class="row">
                        <div class="col-3 strong">
                          Name
                        </div>
                        <div class="col-2 strong">
                          Amount
                        </div>
                        <div class="col-4 strong">
                          Method
                        </div>
                        <div class="col-3 strong">
                          Location
                        </div>
                      </div>
                    </div>
                    <div class="col-12 card-content" v-for="material in product.recycling.rawMaterials">
                      <div class="row">
                        <div class="col-3">
                          {{ material.name }}
                        </div>
                        <div class="col-2">
                          {{ material.amount }} {{ material.unit }}
                        </div>
                        <div class="col-4">
                          {{ material.process }}
                        </div>
                        <div class="col-3">
                          {{ material.location }}
                        </div>
                      </div>
                    </div>
                  </div>
                   <div class="clearfix"></div>
                </div>
                
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Banner end -->
    
    <div class="clearfix"></div>

  </div>
</template>

<script>
  // import Vue from 'vue'
  // import { getGameList, gameContract, call, setWaellet, isWaellet, buyGame, getUserAddress } from '@/Common/contract'

  export default {
    name: 'Product',
    props: {
      code: { type: Object, required: false }
    },
    data: () => ({
      search: '',
      id: null,
      section: 'extraction',
      product: {
        name: 'LNEX1',
        brand: 'HUAWEI',
        type: 'Mobile',
        extraction: {
          rawMaterials: [
            {
              company: 'RM Mineral',
              name: 'gold',
              amount: 2.0,
              unit: 'g',
              process: 'Open air & chemical extraction',
              location: 'Alaska, USA'
            },
            {
              company: 'RM Mineral',
              name: 'platinum',
              amount: 1.2,
              unit: 'g',
              process: 'Internal mine, 100m depth',
              location: 'Mimosa, Zimbabue'
            },
            {
              company: 'La Escondida Mining',
              name: 'copper',
              amount: 16.4,
              unit: 'g',
              process: 'Open air',
              location: 'Escondida, Chile'
            }
          ],
          date: '2019-09-16'
        },
        manufacture: {
          company: 'Huawei',
          process: [
            {
              name: 'CPU Manufacture',
              location: 'Arizona, USA',
              date: '2019-10-01'
            },
            {
              name: 'Board production',
              location: 'Shenzhen, China',
              date: '2019-10-03'
            },
            {
              name: 'Assembly line',
              location: 'Shenzhen, China',
              date: '2019-10-05'
            }
          ],
          date: '2019-10-05'
        },
        transport: [
          {
            company: 'Cosco Group',
            method: 'Sea transport',
            kms: '4755',
            startDate: '2019-10-12',
            endDate: '2019-10-20',
            locationFrom: 'Shenzhen, China',
            locationTo: 'Mumbai, India'
          },
          {
            company: 'Acciona',
            method: 'Train',
            kms: '8230',
            startDate: '2019-10-20',
            endDate: '2019-10-22',
            locationFrom: 'Mumbai, India',
            locationTo: 'Paris, France'
          },
          {
            company: 'DB Schenker',
            method: 'Flight',
            kms: '1050',
            startDate: '2019-10-22',
            endDate: '2019-10-22',
            locationFrom: 'Paris, France',
            locationTo: 'Madrid, Spain'
          }
        ],
        selling: {
          company: 'Mobile House',
          date: '2019-11-02',
          boughtBy: 'ak_nv5B93FPzRHrGNmMdTDfGdd5xGZvep3MVSpJqzcQmMp59bBCv'
        },
        recycling: {
          company: 'North Star',
          rawMaterials: [
            {
              name: 'gold',
              amount: 1.1,
              unit: 'g',
              process: 'Mercury chemical extraction',
              location: 'Alaska, USA'
            },
            {
              name: 'platinum',
              amount: 0.8,
              unit: 'g',
              process: 'Heat separation',
              location: 'Alaska, USA'
            },
            {
              name: 'copper',
              amount: 12.0,
              unit: 'g',
              process: 'Chemical extraction',
              location: 'Mexico DF, Mexico'
            }
          ],
          components: [
          ],
          date: '2019-09-16'
        }
      }
    }),
    computed: {
      style () {
        return 'background-color: #fff; background-position-x: -00px; height: auto;'
      }
    },
    methods: {
    },
    mounted () {
    },
    created: function () {
    }
  }
</script>
