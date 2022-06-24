<template>
  <div>
    <v-container
      fluid
      fill-height
      :class="$vuetify.rtl ? 'bg-fibo-rtl' : 'bg-fibo'"
      class="position-relative"
    >
      <!-- <div class="overlay-top"></div> -->
      <v-row
        class="zindex-head"
        align="center"
        :class="$vuetify.breakpoint.mobile ? '': 'share-app'"
      >
        <v-col
          cols="12"
          md="6"
          class="d-flex align-start"
          :class="$vuetify.breakpoint.mobile ? '': 'h-100'"
        >
          <div class="white--text pa-5 pa-lg-10 t-share-p">
            <h1 class="headline font-weight-bold">{{$t('HeadingFibodaHome')}}</h1>
            <p class="caption text-lg-body-1 mt-2">
              {{$t('ParagraphHomeFiboda')}}
            </p>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <!-- <LoginRegisterFiboda /> -->
          <Register />

        </v-col>
      </v-row>
    </v-container>
    <v-container
      class="my-10 my-md-16 py-10"
      id="scrolling-techniques-7"
    >
      <v-row>
        <v-col cols="12">
          <p class="fiboda-title-text fiboda-color text-center mb-16 px-2 new-line-height">
            {{$t('ParagraphUnderSlideFiboda')}}
          </p>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <div class="d-flex flex-column align-center justify-center">
            <v-img
              src="/fiboda-section-one.svg"
              width="125px"
            ></v-img>
            <div class="mt-3 fiboda-color font-weight-bold title">
              {{$t('titleSectionOneFiboda')}}
            </div>
            <div class="mt-3 fiboda-color text-center">
              {{$t('descSectionOneFiboda')}}
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <div class="d-flex flex-column align-center justify-center">
            <v-img
              src="/fiboda-section-two.svg"
              height="114px"
              width="90px"
            ></v-img>
            <div class="mt-3 fiboda-color font-weight-bold title">
              {{$t('titleSectionTwoFiboda')}}
            </div>
            <div class="mt-3 fiboda-color text-center">
              {{$t('descSectionTwoFiboda')}}
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <div class="d-flex flex-column align-center justify-center">
            <v-img
              src="/fiboda-section-three.svg"
              width="98px"
            ></v-img>
            <div class="mt-3 fiboda-color font-weight-bold title">
              {{$t('titleSectionThreeFiboda')}}
            </div>
            <div class="mt-3 fiboda-color text-center">
              {{$t('descSectionThreeFiboda')}}
            </div>

          </div>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <div class="d-flex flex-column align-center justify-center">
            <v-img
              src="/fiboda-section-four.svg"
              width="100px"
            ></v-img>
            <div class="mt-3 fiboda-color font-weight-bold title">
              {{$t('titleSectionFourFiboda')}}
            </div>
            <div class="mt-3 fiboda-color text-center">
              {{$t('descSectionFourFiboda')}}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container
      fluid
      class="bg-fiboda py-16"
    >
      <v-container class="my-5">
        <v-row>
          <v-col cols="12">
            <h2 class="display-1 mb-10 title-section-three-fiboda font-weight-bold text-center">
              {{$t('ParagraphSectionThree')}}
            </h2>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <div>
              <div class="pa-3 white--text">
                <div class="headline font-weight-bold">{{$t('TitleElementOneSectionThreeFiboda')}}</div>
                <p class="ma-0 mt-3">{{$t('DescriptionElementOneSectionThreeFiboda')}}</p>
              </div>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <div>
              <div class="pa-3 white--text">
                <div class="headline font-weight-bold">{{$t('TitleElementTwoSectionThreeFiboda')}}</div>
                <p class="ma-0 mt-3">{{$t('DescriptionElementTwoSectionThreeFiboda')}}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <v-container
      fluid
      fill-height
      class="bg-section-four-fiboda"
    >
      <v-container class="py-16 my-md-16 my-5">
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <h3 class="display-1 white--text text-on-header">{{$t('TitleSectionFiveFiboda')}}</h3>
            <p class="mt-3 white--text text-on-header">{{$t('DescriptionSectionFiveFiboda')}}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <v-container class="py-16">
      <v-row>
        <v-col cols="12">
          <div class="title-section-six-fiboda text-center display-1 font-weight-bold mb-10">{{$t('DTFibodo')}}</div>
        </v-col>

        <v-col
          cols="12"
          md="3"
          class="px-auto px-md-5"
        >
          <v-img
            width="100"
            src="/fiboda-one.png"
            class="mx-auto"
          ></v-img>
          <p class="desction-section-six-fiboda mt-2">
            {{$t('DTFibodoTwo')}}
          </p>
        </v-col>
        <v-col
          cols="12"
          md="3"
          class="px-auto px-md-5"
        >
          <v-img
            width="100"
            src="/fiboda-two.png"
            class="mx-auto"
          ></v-img>
          <p class="desction-section-six-fiboda mt-2">
            {{$t('DTFibodoOne')}}
          </p>
        </v-col>
        <v-col
          cols="12"
          md="3"
          class="px-auto px-md-5"
        >
          <v-img
            width="100"
            src="/fiboda-three.png"
            class="mx-auto"
          ></v-img>
          <p class="desction-section-six-fiboda mt-2">
            {{$t('DTFibodoFour')}}
          </p>
        </v-col>
        <v-col
          cols="12"
          md="3"
          class="px-auto px-md-5"
        >
          <v-img
            width="100"
            src="/fiboda-four.png"
            class="mx-auto"
          ></v-img>
          <p class="desction-section-six-fiboda mt-2">
            {{$t('DTFibodoThree')}}
          </p>
        </v-col>
        <v-col cols="12">
          <div class="mt-5 text-center">
            <v-btn
              class="btn-register-fidibo white--text"
              rounded
              depressed
              x-large
              href="https://client.opofinance.com/register"
            >{{$t('BtnRegister')}}</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container
      fluid
      class="footer-crypto py-2 py-md-16 white--text"
      fill-height
    >
      <v-container>
        <v-row>
          <v-col
            cols="6"
            md="2"
            sm="3"
            offset-md="2"
          >
            <div>
              <h5>HELP</h5>
              <ul>
                <li>
                  <a href="https://www.fiboda.com/user-guide">Investors' Guide</a>
                </li>
              </ul>
            </div>
          </v-col>

          <v-col
            cols="6"
            md="2"
            sm="3"
          >
            <div>
              <h5>INFO</h5>
              <ul>
                <li>
                  <a href="https://www.fiboda.com/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="https://www.fiboda.com/risk-disclaimer">Risk Disclaimer</a>
                </li>
                <li>
                  <a href="https://www.fiboda.com/terms-of-service">Terms Of Service</a>
                </li>
                <li>
                  <a href="https://www.fiboda.com/sitemap">Sitemap</a>
                </li>
              </ul>
            </div>
          </v-col>

          <v-col
            cols="6"
            md="2"
            sm="3"
          >
            <div>
              <h5>PROGRAMS</h5>
              <ul>
                <li>
                  <a href="https://www.fiboda.com/trader-program">Trader Program</a>
                </li>
                <li>
                  <a href="https://www.fiboda.com/trader-guide">Trader Guide</a>
                </li>
              </ul>
            </div>
          </v-col>

          <v-col
            cols="6"
            md="2"
            sm="3"
          >
            <div>
              <h5>FEATURES</h5>
              <ul>
                <li>
                  <a href="https://www.fiboda.com/combos">Combos</a>
                </li>
                <li>
                  <a href="https://www.fiboda.com/lists#user-lists">User Lists</a>
                </li>
                <li>
                  <a href="https://www.fiboda.com/calendar">Calendar</a>
                </li>
                <li>
                  <a href="https://www.fiboda.com/forex-tools">Forex Tools</a>
                </li>
                <li>
                  <a href="https://www.fiboda.com/automated-trading">Automator</a>
                </li>
                <li>
                  <a href="https://www.fiboda.com/autoprotect-your-account">FibodaGuard™</a>
                </li>
                <li>
                  <a href="https://www.fiboda.com/simulate?autorun=true">Simulate</a>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col
            cols="12"
            class="mt-2 mt-md-10"
          >
            <p>
              © Copyright 2022 Fiboda
              <br>
              Trading spot currencies involves substantial risk and there is always the potential for loss. Your trading results may vary. Because the risk factor
              is high in the foreign exchange market trading, only genuine "risk" funds should be used in such trading. If you do not have the extra capital that
              you can afford to lose, you should not trade in the foreign exchange market. Forex Brokers and Fiboda are compensated for their services
              through the spread between the bid/ask prices or there may be a cost to initiate a trade through the bid/ask spread.
            </p>
            <p>
              Forex trading involve a real risk of loss. No "safe" trading system has ever been devised, and no one can guarantee profits or freedom from loss.
              Past performance is not indicative of future results.
            </p>
            <p>
              Hypothetical performance results have many inherent limitations, some of which are described below. No representation is being made that any
              account will or is likely to achieve profits or losses similar to those shown. In fact, there are frequently sharp differences between hypothetical
              performance results and the actual results subsequently achieved by any particular trading program
            </p>
            <p>
              One of the limitations of hypothetical performance results is that they are generally prepared with the benefit of hindsight. In addition, hypothetical
              trading does not involve financial risk, and no hypothetical trading record can completely account for the impact of financial risk in actual
              trading. For example, the ability to withstand losses or to adhere to a particular trading program in spite of trading losses are material points
              which can also adversely affect actual trading results. There are numerous other factors related to the markets in general or to the implementation
              of any specific trading program which cannot be fully accounted for in the preparation of hypothetical performance results and all of which
              can adversely affect actual trading results. Please click here to see full disclaimer.
            </p>
            <p>
              Fiboda | Fiboda Social Forex Trading 7
              <br>
              Fiboda Group LTD is a member of The Financial Commission, an international organisation engaged in a resolution of disputes within the financial services industry in the Forex market located in Hong Kong and London.
            </p>
            <p>
              Farsi language strictly refers to Farsi speaking diaspora in non-sanctioned countries and specifically not residents of Iran to whom all the available
              and platform based services are forbidden. Furthermore, login attempts from Iranian IP addresses will be blocked from service and additionally
              in order to register in the electronic trading platform valid ID documentation and proof of permanent residency is required, hence any
              registration attempts not meeting the aforementioned requirements and restriction, shall be blocked accordingly
            </p>
          </v-col>

        </v-row>
      </v-container>
    </v-container>
  </div>
</template>
<script>
import LoginRegisterFiboda from '~/components/LoginRegisterFiboda';
import Register from '~/components/Register';

export default {
  components:{
    LoginRegisterFiboda,
    Register
  },
  layout:'fiboda',
  name: 'FibodaPage',
  head:{
    title:'Fiboda'
  }
}
</script>