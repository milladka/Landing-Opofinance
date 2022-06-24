<template>
  <div>
    <v-container
      fluid
      class="bg-top position-relative"
      :class="$vuetify.rtl ? 'bg-shares-rtl' : 'bg-shares'"
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
            <h1 class="display-1 font-weight-bold">{{$t('HeadingHome')}}</h1>
            <p class="title mt-7">
              {{$t('ParagraphHomeOneShares')}}
            </p>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <!-- <LoginRegister /> -->
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
          <p class="display-1 color-shares text-center mb-16 px-2 new-line-height">
            {{$t('ParagraphUnderSlide')}}
          </p>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <div class="d-flex flex-column align-center justify-center">
            <!-- <v-img
              src="/meta.svg"
              width="250px"
            ></v-img> -->
            <img
              width="120"
              src="/metatrader-logo.png"
              alt=""
            >
            <div class="mt-7 text-center font-weight-bold color-shares">
              {{$t('ElementFour')}}
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <div class="d-flex flex-column align-center justify-center">
            <v-img
              src="/spreads.svg"
              height="120px"
              width="125px"
            ></v-img>
            <div class="mt-7 text-center font-weight-bold color-shares">
              {{$t('ElementThree')}}
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <div class="d-flex flex-column align-center justify-center">
            <v-img
              src="/instruments.svg"
              height="120px"
              width="80px"
            ></v-img>
            <div class="mt-7 text-center font-weight-bold color-shares">
              {{$t('ElementTwo')}}
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <div class="d-flex flex-column align-center justify-center">
            <v-img
              src="/bestSocialTrading.svg"
              height="120px"
              width="160px"
            ></v-img>
            <div class="mt-7 text-center font-weight-bold color-shares">
              {{$t('ElementOne')}}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container
      fluid
      class="section-three-bg py-16"
    >
      <v-container class="my-5">
        <v-row>
          <v-col cols="12">
            <h2 class="display-1 text-center mb-10 white--text">
              {{$t('ParagraphSectionThree')}}
            </h2>
          </v-col>
          <v-col
            cols="12"
            offset-md="1"
            md="10"
          >
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <div class="d-flex align-center flex-column flex-md-row">
                  <div>
                    <v-img
                      src="/asset-five.png"
                      width="70px"
                      height="70px"
                      alt=""
                    ></v-img>
                  </div>
                  <div class="d-flex justify-center flex-column pa-3 white--text text-center align-center align-md-start">
                    <div class="title font-weight-bold">{{$t('TitleElementOneSectionThree')}}</div>
                    <p class="ma-0">{{$t('DescriptionElementOneSectionThree')}}</p>
                  </div>
                </div>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <div class="d-flex align-center flex-column flex-md-row">
                  <div>
                    <v-img
                      src="/asset-six.png"
                      width="70px"
                      height="70px"
                      alt=""
                    ></v-img>
                  </div>
                  <div class="d-flex justify-center flex-column pa-3 white--text text-center align-center align-md-start">
                    <div class="title font-weight-bold">{{$t('TitleElementTwoSectionThree')}}</div>
                    <p class="ma-0">{{$t('DescriptionElementTwoSectionThree')}}</p>
                  </div>
                </div>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <div class="d-flex align-center flex-column flex-md-row">
                  <div>
                    <v-img
                      src="/asset-seven.png"
                      width="70px"
                      height="70px"
                      alt=""
                    ></v-img>
                  </div>
                  <div class="d-flex justify-center flex-column pa-3 white--text text-center align-center align-md-start">
                    <div class="title font-weight-bold">{{$t('TitleElementThreeSectionThree')}}</div>
                    <p class="ma-0">{{$t('DescriptionElementThreeSectionThree')}}</p>
                  </div>
                </div>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <div class="d-flex align-center flex-column flex-md-row">
                  <div>
                    <v-img
                      src="/asset-eight.png"
                      width="70px"
                      height="70px"
                      alt=""
                    ></v-img>
                  </div>
                  <div class="d-flex justify-center flex-column pa-3 white--text text-center align-center align-md-start">
                    <div class="title font-weight-bold">{{$t('TitleElementFourSectionThree')}}</div>
                    <p class="ma-0">{{$t('DescriptionElementFourSectionThree')}}</p>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <v-container
      fluid
      class="py-16 my-md-16 my-5"
    >
      <v-row>
        <v-col cols="12">
          <h3 class="display-1 text-center mb-8 color-shares">{{$t('SubjectSectionFour')}}</h3>
        </v-col>
        <v-col
          cols="12"
          offset-md="2"
          md="9"
          class="mt-5"
        >
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <div class="d-flex align-center flex-column flex-md-row">
                <div>
                  <v-img
                    src="/customersupport.svg"
                    width="70px"
                    height="80px"
                    alt=""
                  ></v-img>
                </div>
                <div class="d-flex justify-center flex-column pa-5 color-shares align-center align-md-start">
                  <div class="title font-weight-bold">{{$t('TitleElementOneSectionFour')}}</div>
                  <p class="ma-0 mt-2">{{$t('DescriptionElementOneSectionFour')}}</p>
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <div class="d-flex align-center flex-column flex-md-row">
                <div>
                  <v-img
                    src="/asset-more-five.png"
                    width="80px"
                    height="80px"
                    alt=""
                  ></v-img>
                </div>
                <div class="d-flex justify-center flex-column pa-5 color-shares align-center align-md-start">
                  <div class="title font-weight-bold">{{$t('TitleElementTwoSectionFourShares')}}</div>
                  <p class="ma-0 mt-2">{{$t('DescriptionElementTwoSectionFourShares')}}</p>
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <div class="d-flex align-center flex-column flex-md-row">
                <div>
                  <v-img
                    src="/FastandTransparentExecution.svg"
                    width="80px"
                    height="80px"
                    alt=""
                  ></v-img>
                </div>
                <div class="d-flex justify-center flex-column pa-5 color-shares align-center align-md-start">
                  <div class="title font-weight-bold">{{$t('TitleElementThreeSectionFour')}}</div>
                  <p class="ma-0 mt-2">{{$t('DescriptionElementThreeSectionFour')}}</p>
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <div class="d-flex align-center flex-column flex-md-row">
                <div>
                  <v-img
                    src="/Segregatedaccounts.svg"
                    width="70px"
                    height="80px"
                    alt=""
                  ></v-img>
                </div>
                <div class="d-flex justify-center flex-column pa-5 color-shares align-center align-md-start">
                  <div class="title font-weight-bold">{{$t('TitleElementFourSectionFour')}}</div>
                  <p class="ma-0 mt-2">{{$t('DescriptionElementFourSectionFour')}}</p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          class="d-flex align-center justify-center mt-3"
        >
          <v-btn
            class="btn-register white--text"
            rounded
            depressed
            large
            color="#ff6600"
            href="https://client.opofinance.com/register"
          >{{$t('BtnRegister')}}</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container
      fluid
      class="section-five py-16"
    >
      <v-row>
        <v-col cols="12">
          <h4 class="display-1 text-center white--text mt-5">{{$t('TitleSectionFive')}}</h4>
        </v-col>
        <v-col
          cols="12"
          class="px-3 px-md-16"
        >
          <p class="text-center white--text px-0 px-md-16 mx-0 mx-md-16">
            {{$t('DescSectionFive')}}
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container
      fluid
      class="footer-crypto footer-crypto-share py-2 py-md-16 white--text"
      fill-height
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
            class="pa-1 pa-md-10"
          >
            <p class="caption">{{ $t('FoxBoxOne')}}</p>
          </v-col>
          <v-col
            cols="6"
            md="2"
            sm="3"
          >
            <div>
              <h5>Products</h5>
              <ul>
                <li>
                  <a href="https://www.opofinance.com/en/forex-tradings/">Forex Trading</a>
                </li>
                <li>
                  <a href="https://www.opofinance.com/en/spot-metals/">Spot Metals</a>
                </li>
                <li>
                  <a href="https://www.opofinance.com/en/spot-energies/">Spot Energies</a>
                </li>
                <li>
                  <a href="https://www.opofinance.com/en/cfd-shares/">CFD Shares</a>
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
              <h5>Company</h5>
              <ul>
                <li>
                  <a href="https://www.opofinance.com/en/who-we-are/">Who we are</a>
                </li>
                <li>
                  <a href="https://www.opofinance.com/en/forex-academy/">Forex Academy</a>
                </li>
                <li>
                  <a href="https://www.opofinance.com/en/contact-us/">Contact us</a>
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
              <h5>Accounts</h5>
              <ul>
                <li>
                  <a href="https://www.opofinance.com/en/accounts-comparison/">Accounts Comparison</a>
                </li>
                <li>
                  <a href="https://www.opofinance.com/en/leverage-margin/">Leverage & Margin</a>
                </li>
                <li>
                  <a href="https://www.opofinance.com/en/deposits-withdrawals/">Deposits & Withdrawals</a>
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
              <h5>Policies</h5>
              <ul>
                <li>
                  <a href="https://www.opofinance.com/wp-content/uploads/Policies/Risk-Disclosure.pdf">Risk-disclosure</a>
                </li>
                <li>
                  <a href="https://www.opofinance.com/wp-content/uploads/Policies/Refund-Policy.pdf">Refund-policy</a>
                </li>
                <li>
                  <a href="https://www.opofinance.com/wp-content/uploads/Policies/Privacy-Policy.pdf">Privacy-policy</a>
                </li>
                <li>
                  <a href="https://opoforex.com/wp-content/uploads/Policies/AML_Policy-OpoGroupLLC.pdf">AML Policy</a>
                </li>
                <li>
                  <a href="https://www.opofinance.com/wp-content/uploads/2021/04/opoforex-client-agreement.pdf">Client's Agreement</a>
                </li>
                <li>
                  <a href="https://www.opofinance.com/wp-content/uploads/Policies/withdrawal-conditions.pdf">Withdrawal Policy</a>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col
            cols="12"
            class="mt-2 mt-md-10"
          >
            <p>
              Opo Group LLC is an approved member of The Financial Commission, an international organization engaged in a resolution of disputes within the financial services industry in the Forex market
              located in Hong Kong and London. The Financial Commission protects trader’s interests, providing an insurance for up to €20 000 per case. RISK WARNING: Trading involves a high level of risk
              and may not be suitable for all traders or investors. You should carefully consider your trading goals or objectives, financial situations, level of experience and needs before entering into margin
              trading with Opofinance. There is a risk of losing substantially more than the investor’s initial investment. Hence, you are advised to only trade the products if you fully understand the risks involved
              and can afford them.OTHER INFORMATION: The information on this website is subject to change at any time without any prior notice and is solely for education purposes. The contents
              do not constitute investment advice and is provided as general market commentary. Opofinance has taken measures to ensure the accuracy of the contents, however, does not guarantee it and
              is not liable for any losses incurred directly or indirectly from use of or reliance on the website’s information. Please read out full Risk Disclosure Statement.
              DISCLAIMER: Opofinance is authorized Saint Vincent And the The Grenadines under the Provision of Investment Services, Limited Liability company act chapter 151 of the revised Laws of
              Saint Vincent and Grenadines 2009, With Number 866LLC2021 in Saint Vincent and Grenadines
            </p>
            <p>
              Important: We are not accepting users from these countries, Australia, USA, Canada, North Korea, Japan.
            </p>
            <p>
              For refunds please email to (finance@Opofinance.com) and withdrawals takes up to 1 business day.
            </p>
            <p class="mt-16">
              Copyrights © {{ new Date().getFullYear() }} – All rights reserved. Website Design & Developed By Opofinance
            </p>
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-img
              width="250px"
              src="/opofinance-logo-footer.png"
            ></v-img>
          </v-col>

        </v-row>
      </v-container>
    </v-container>
  </div>
</template>
<script>
import LoginRegister from '~/components/LoginRegister';
import Register from '~/components/Register';

export default {
  components:{
    LoginRegister,
    Register
  },
  name: 'SharesPage',
  head:{
    title:'Shares'
  }
}
</script>