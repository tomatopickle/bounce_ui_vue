<template>
  <div id="app">
    <b-app :loading="app" src="./favicon.ico" loadingText="Getting data...">
      <template v-slot:append>
        <transition name="fade" :duration="{ enter: 0, leave: 50 }">
          <b-sidebar width="400px" v-show="sidebar">
            <template v-slot:header>
              <b-flex>
                <h3>Database Info</h3>
                <b-spacer></b-spacer>
                <b-btn @click="sidebar = false" ghost icon
                  ><b-icon name="mdi mdi-close"></b-icon
                ></b-btn>
              </b-flex>
            </template>
            <div>
              <b-tab v-model="tabIndex2" :tabs="tabs2"></b-tab>
              <br />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                iure quam voluptates maiores magnam, commodi quod molestiae
                quasi voluptas doloribus molestias cumque consequuntur!
                Molestiae recusandae nam dolores reprehenderit incidunt ab.
              </p>
            </div>
            <template v-slot:footer>
              <b-btn color="primary" block>View Settings</b-btn>
              <br />
              <b-btn color="primary" block outline>Open Docs </b-btn>
            </template>
          </b-sidebar>
        </transition>
      </template>
      <b-nav sticky>
        <template v-slot:branding>
          <b-flex>
            <img height="30px" class="mr-3" src="./assets/logo.png" />
            <h2>Bounce UI</h2>
          </b-flex>
        </template>
        <template v-slot:actions>
          <b-btn @click="$toggleTheme()" class="mx-1" bounce ghost
            >Toggle Theme &nbsp;<b-icon
              right
              name="mdi mdi-brightness-6"
            ></b-icon>
          </b-btn>
        </template>
      </b-nav>
      <b-container>
        <br />
        <h1>Checkbox</h1>
        <b-checkbox v-model="switchIndex" label="CheckBox"></b-checkbox>
        <b-switch v-model="switchIndex" label="Switch"></b-switch>
        {{ switchIndex }}
        <br />
        <br />
        <h1>Modals</h1>
        <br />
        <b-btn class="mx-1" @click="modal.normal = true" color="primary"
          >Open Modal</b-btn
        >
        <b-btn class="mx-1" @click="modal.custom = true" color="primary"
          >Open a Custom Modal</b-btn
        >
        <b-btn class="mx-1" @click="modal.glass = true" color="primary"
          >Open a Glass Modal</b-btn
        >
        <b-modal v-model="modal.normal" width="375px" title="Login">
          <b-card>
            <b-flex class="modal-header">
              <h1>Login</h1>
              <b-spacer></b-spacer>
              <b-btn @click="modal.normal = false" ghost icon
                ><b-icon name="mdi mdi-close"></b-icon
              ></b-btn>
            </b-flex>
            <p>
              <b-input ghost label="User Name" placeholder="User Name">
                <template v-slot:inner-prepend>
                  <b-icon name="mdi mdi-account"></b-icon>
                </template>
              </b-input>
              <b-input
                class="my-1"
                type="password"
                ghost
                placeholder="Password"
                label="Password "
              >
                <template v-slot:inner-prepend>
                  <b-icon name="mdi mdi-lock"></b-icon>
                </template>
              </b-input>
            </p>
            <br />
            <template v-slot:footer>
              <b-btn block color="primary">Login</b-btn>
              <b-divider class="mt-5" borderless>Or</b-divider>
              <b-btn block ghost color="primary">Sign Up</b-btn>
            </template>
          </b-card>
        </b-modal>
        <b-modal v-model="modal.custom" width="500px" custom>
          <div>
            <b-card
              class="m-auto"
              height="300px"
              src="https://9to5mac.com/wp-content/uploads/sites/6/2021/10/Monterey-Graphic-8-dragged.jpeg?quality=82&strip=all&w=1000"
              width="500px"
            >
              <template v-slot:header>
                <b-flex class="dark"
                  ><b-spacer></b-spacer
                  ><b-btn ghost @click="modal.custom = false" icon
                    ><b-icon name="mdi mdi-close"></b-icon></b-btn></b-flex
              ></template>
              <h1 style="margin-top: 10%">MacOS Montrey</h1>
              <p>The calm after Big Sur</p>
              <template v-slot:footer>
                <b-flex>
                  <b-spacer></b-spacer>
                  <b-btn glass size="medium" class="mx-1" color="primary"
                    >Read More <b-icon right name="mdi mdi-arrow-right"></b-icon
                  ></b-btn>
                </b-flex>
              </template>
            </b-card>
          </div> </b-modal
        ><b-modal v-model="modal.glass" width="750px">
          <b-card height="220px" width="750px" glass-sidebar>
            <template #prepend
              ><b-nav-panel v-model="panelIndex" width="200px">
                <template #header>
                  <h4>Settings</h4>
                </template>
                <template #1> Account </template>
                <template #2> Appearance </template>
                <template #3> Security </template>
              </b-nav-panel></template
            >
            <b-card bare width="100%">
              <b-tab-content style="text-align: center" v-model="panelIndex">
                <template v-slot:0>
                  <h4>Account</h4>
                  <p>This is your account settings</p>
                </template>
                <template v-slot:1>
                  <p>Your photos come here</p>
                </template>
                <template v-slot:2>
                  <p>Your videos come here</p>
                </template>
              </b-tab-content>
              <template #footer>
                <b-flex>
                  <b-spacer></b-spacer>

                  <b-btn class="mx-1" @click="modal.glass = false"
                    >Cancel</b-btn
                  >
                </b-flex>
              </template>
            </b-card>
          </b-card>
        </b-modal>
        <br /><br />
        <b-input errorText="Invalid Email"></b-input>
        <h1>Cards</h1>
        <br />
        <div class="grid-4_sm-1_md-2">
          <div class="col">
            <b-card width="300px" height="150px" overflow>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias nam ut quam, autem placeat odit a atque necessitatibus
                porro impedit repudiandae! Nihil necessitatibus excepturi qui
                iure beatae quaerat at porro.
              </p>
            </b-card>
          </div>
          <div class="col">
            <b-card width="300px">
              <template v-slot:header>Confirm</template>
              <p>Confirm Bounce UI is the best</p>
              <br />
              <template v-slot:float>
                <b-btn class="mx-1" icon outline color="danger"
                  ><b-icon name="mdi mdi-close"></b-icon
                ></b-btn>
                <b-btn class="mx-1" icon outline color="success"
                  ><b-icon name="mdi mdi-check"></b-icon
                ></b-btn>
              </template>
            </b-card>
          </div>
          <div class="col">
            <b-card width="300px">
              <template v-slot:header>Introducing Bounce UI</template>
              <p>
                A new design system with speed, usablity and consistence in mind
              </p>
              <template v-slot:footer>
                <b-flex>
                  <b-spacer></b-spacer>
                  <b-btn size="medium" class="mx-1" color="primary"
                    >Read More <b-icon right name="mdi mdi-arrow-right"></b-icon
                  ></b-btn>
                </b-flex>
              </template>
            </b-card>
          </div>
          <div class="col">
            <b-card
              src="https://news.microsoft.com/wp-content/uploads/prod/sites/612/2021/06/Windows-11-Bloom-Screensaver-Dark-800x533.jpg"
              width="300px"
            >
              <template v-slot:header>Windows 11 Release</template>
              <p>
                Windows 11 will start to become available on October 5, 2021
              </p>
              <template v-slot:footer>
                <b-flex>
                  <b-spacer></b-spacer>
                  <b-btn glass size="medium" class="mx-1" color="primary"
                    >Read More <b-icon right name="mdi mdi-arrow-right"></b-icon
                  ></b-btn>
                </b-flex>
              </template>
            </b-card>
          </div>
          <div class="col">
            <b-card
              src="https://9to5mac.com/wp-content/uploads/sites/6/2021/10/Monterey-Graphic-8-dragged.jpeg?quality=82&strip=all&w=1000"
              width="300px"
            >
              <template v-slot:header>MacOS Montrey</template>
              <p>The calm after Big Sur</p>
              <template v-slot:footer>
                <b-flex>
                  <b-spacer></b-spacer>
                  <b-btn glass size="medium" class="mx-1" color="primary"
                    >Read More <b-icon right name="mdi mdi-arrow-right"></b-icon
                  ></b-btn>
                </b-flex>
              </template>
            </b-card>
          </div>
          <div class="col">
            <b-card width="300px">
              <template v-slot:header>Login</template>
              <p>
                <b-input label="User Name" placeholder="User Name">
                  <template v-slot:inner-prepend>
                    <b-icon name="mdi mdi-account"></b-icon>
                  </template>
                </b-input>
                <b-input
                  class="my-1"
                  type="password"
                  ghost
                  placeholder="Password"
                  label="Password "
                >
                  <template v-slot:inner-prepend>
                    <b-icon name="mdi mdi-lock"></b-icon>
                  </template>
                </b-input>
              </p>
              <br />
              <template v-slot:footer>
                <b-btn block color="primary">Login</b-btn>
                <b-divider></b-divider>
                <b-btn block ghost color="primary">Sign Up</b-btn>
              </template>
            </b-card>
          </div>
          <div class="col">
            <b-card width="300px" loading>
              <template v-slot:header>Sign Up</template>
              <p>
                <b-input circle ghost label="User Name" placeholder="User Name">
                  <template v-slot:inner-prepend>
                    <b-icon name="mdi mdi-account"></b-icon>
                  </template>
                </b-input>
                <b-input
                  class="my-1"
                  circle
                  type="password"
                  ghost
                  label="Password"
                  placeholder="Password"
                >
                  <template v-slot:inner-prepend>
                    <b-icon name="mdi mdi-lock"></b-icon>
                  </template>
                </b-input>
              </p>
              <br />
              <template v-slot:footer>
                <b-btn block circle color="primary" loading>Sign Up</b-btn>
                <b-divider>Or</b-divider>
                <b-btn circle block ghost color="primary">Login</b-btn>
              </template>
            </b-card>
          </div>
        </div>
        <br /><br /><br />
        <h1>Buttons</h1>
        <br />
        <b-btn class="mx-1">Default</b-btn>
        <b-btn class="mx-1" color="primary">Primary</b-btn>
        <b-btn class="mx-1" color="secondary">Secondary</b-btn>
        <b-btn class="mx-1" color="success">Success</b-btn>
        <b-btn class="mx-1" color="danger">Danger</b-btn>
        <br /><br />
        <b-btn class="mx-1" outline>Default</b-btn>
        <b-btn class="mx-1" outline color="primary">Primary</b-btn>
        <b-btn class="mx-1" outline color="secondary">Secondary</b-btn>
        <b-btn class="mx-1" outline color="success">Success</b-btn>
        <b-btn class="mx-1" outline color="danger">Danger</b-btn>
        <br /><br />
        <b-btn class="mx-1" ripple>Default</b-btn>
        <b-btn class="mx-1" ghost ripple color="primary">Primary</b-btn>
        <b-btn class="mx-1" ripple color="secondary">Secondary</b-btn>
        <b-btn class="mx-1" ripple color="success">Success</b-btn>
        <b-btn class="mx-1" outline ripple color="danger">Danger</b-btn>
        <b-btn class="mx-1" focus-border ripple color="primary"
          >With Focus Border</b-btn
        >
        <br /><br />
        <b-btn class="mx-1" bounce>Default</b-btn>
        <b-btn class="mx-1" ghost bounce color="primary">Primary</b-btn>
        <b-btn class="mx-1" bounce color="secondary">Secondary</b-btn>
        <b-btn @click="$toggleTheme()" class="mx-1" bounce outline
          >Toggle Dark mode &nbsp;<b-icon right name="brightness-6"></b-icon>
        </b-btn>
        <b-btn class="mx-1" outline bounce color="danger">Danger</b-btn>
        <b-btn class="mx-1" focus-border bounce color="primary"
          >With Focus Border</b-btn
        >
        <br /><br />
        <b-btn class="mx-1" ghost>Default</b-btn>
        <b-btn class="mx-1" ghost color="primary">Primary</b-btn>
        <b-btn class="mx-1" ghost color="secondary">Secondary</b-btn>
        <b-btn class="mx-1" ghost color="success">Success</b-btn>
        <b-btn class="mx-1" ghost color="danger">Danger</b-btn>
        <br /><br />
        <b-btn class="mx-1" icon ghost
          ><b-icon name="mdi mdi-brightness-6"></b-icon
        ></b-btn>
        <b-btn class="mx-1" color="danger" icon ghost
          ><b-icon name="mdi mdi-delete"></b-icon
        ></b-btn>
        <b-btn class="mx-1" color="success" icon ghost ripple
          ><b-icon name="mdi mdi-content-save"></b-icon
        ></b-btn>
        <b-btn class="mx-1" circle color="primary" icon bounce
          ><b-icon size="25px" name="mdi mdi-play"></b-icon
        ></b-btn>
        <b-btn class="mx-1" color="success" icon outline
          ><b-icon name="mdi mdi-check"></b-icon
        ></b-btn>
        <b-btn class="mx-1" ghost color="primary" icon
          ><b-icon name="mdi mdi-bluetooth"></b-icon
        ></b-btn>
        <br /><br />
        <b-btn class="mx-1" color="primary">
          Run
          <b-icon right name="mdi mdi-play" fill="white"></b-icon>
        </b-btn>
        <b-btn class="mx-1" color="success" ghost>
          Save
          <b-icon left name="mdi mdi-content-save"></b-icon>
        </b-btn>
        <b-btn class="mx-1" color="danger">
          Delete
          <b-icon left name="mdi mdi-delete"></b-icon>
        </b-btn>
        <br /><br />
        <b-btn size="small">Small</b-btn>
        <b-btn size="large">Large</b-btn>
        <b-btn size="tiny">Tiny</b-btn>
        <b-btn size="medium">Medium</b-btn>

        <br /><br />
        <h1>Inputs</h1>
        <div class="w-1/2 mx-auto">
          <b-input label="You're name" placeholder="Hai">
            <template v-slot:inner-prepend>
              <b-icon name="mdi mdi-account"></b-icon>
            </template>
            <template v-slot:inner-append>
              <b-icon name="mdi mdi-account"></b-icon>
            </template>
            <template v-slot:append>
              <b-icon name="mdi mdi-account"></b-icon>
            </template>
            <template v-slot:prepend>
              <b-icon name="mdi mdi-account"></b-icon>
            </template>
          </b-input>
          <br />
          <b-textarea
            height="100px"
            noResize
            v-model="text"
            placeholder="You're Description"
          ></b-textarea>
          <br />
          <b-card class="center">
            <b-input
              type="number"
              v-model="tabIndex"
              transparent
              placeholder="Name"
            >
            </b-input>
            <br />
            <b-textarea
              transparent
              placeholder="You're Description"
            ></b-textarea>
          </b-card>
          <br />
          <br />
          <h4>{{ text }}</h4>
          <br />
          <b-input v-model="text" ghost placeholder="Hai">
            <template v-slot:inner-prepend>
              <b-icon name="mdi mdi-magnify"></b-icon>
            </template>
          </b-input>
        </div>
        <br /><br />
        <h1>Spinner</h1>
        <b-flex class="mx-auto" style="width: max-content">
          <b-btn color="primary" :loading="loading" @click="loading = !loading"
            >Click to start loading</b-btn
          >
          <b-btn @click="loading = !loading" class="ml-2" ghost
            >Toggle Loading</b-btn
          >
        </b-flex>
        <br />
        <b-card class="mx-auto" loading width="300px">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            dolorum natus deleniti nostrum voluptate magnam assumenda obcaecati
            omnis molestias delectus, similique, deserunt ipsa enim veniam quas
            facilis officiis maxime. Ducimus!
          </p>
        </b-card>
        <div style="width: 50px; height: 50px" class="mx-auto">
          <b-spinner></b-spinner>
        </div>
        <br /><br />
        <h1>Tabs</h1>
        <b-card width="500px" class="mx-auto">
          <b-tab v-model="tabIndex" :tabs="tabs"></b-tab>
          <br />
          <p>
            <b-tab-content
              style="text-align: center"
              v-model="tabIndex"
              :tabs="tabs"
            >
              <template v-slot:0>
                <p>Your music come here</p>
              </template>
              <template v-slot:1>
                <p>Your photos come here</p>
              </template>
              <template v-slot:2>
                <p>Your videos come here</p>
              </template>
            </b-tab-content>
          </p>
        </b-card>
        <br />
        <br />
        <h2>Tab Index is {{ tabIndex }}</h2>
        <br /><br />
        <h1>Sidebars</h1>
        <b-btn color="primary" @click="sidebar = !sidebar">Open Sidebar</b-btn>
        <br /><br />
        <h1>BApp Loader</h1>
        <b-btn color="primary" @click="app = !app">Start loading</b-btn>
        <br /><br />
        <h1>List</h1>
        <b-card style="text-align: left">
          <template v-slot:header></template>
          <br />
          <b-list-item>
            <template v-slot:heading> </template>
            <p>Yeah, life is ok ig...</p>
          </b-list-item>
          <b-list-item>
            <template v-slot:heading> </template>
            I... don't know..
          </b-list-item>
          <b-list-item>
            <template v-slot:heading>Hellooo</template>
            haii
          </b-list-item>
          <b-list-item>
            <template v-slot:heading>why? </template>
            I... don't know..
          </b-list-item>
        </b-card>
        <br />
        <b-list style="text-align: left" width="250px">
          <template v-slot:header>Contacts</template>
          <b-list-item clickable>
            <b-flex>
              <b-avatar username="Darth Vader" :size="30"></b-avatar>
              <span>Darth Vader</span>
            </b-flex>
          </b-list-item>
          <b-list-item clickable>
            <b-flex>
              <b-avatar username="Aman" :size="30"></b-avatar>
              <span>Aman</span>
            </b-flex>
          </b-list-item>
          <b-list-item clickable>
            <b-flex>
              <b-avatar username="Abaan" :size="30"></b-avatar>
              <span>Abaan</span>
            </b-flex>
          </b-list-item>
        </b-list>
        <br /><br />
        <h1>Avatars</h1>
        <b-avatar username="Hola"></b-avatar>
        <br /><br />
        <h1>Navigation Panel</h1>
        <b-card height="220px" width="500px" glass>
          <template #prepend>
            <b-nav-panel v-model="panelIndex">
              <template #header>
                <h4>Settings</h4>
              </template>
              <template #1> Account </template>
              <template #2> Appearance </template>
              <template #3> Security </template>
            </b-nav-panel></template
          >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis rem
            sunt neque eaque at id nam voluptatum exercitationem harum maxime
            vero nemo praesentium, ipsa mollitia dolor ad minus cum ratione.
          </p>
        </b-card>
        <br /><br /><br /><br />
      </b-container>
    </b-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => {
    return {
      modal: {
        normal: false,
        custom: false,
        glass: false,
      },
      app: false,
      loading: false,
      tabs: [
        { name: "Music", value: "music", icon: "mdi mdi-music" },
        { name: "Photos", value: "photo", icon: "mdi mdi-image" },
        { name: "Videos", value: "videos", icon: "mdi mdi-movie" },
      ],
      tabs2: [
        { name: "Info", value: "info", icon: "mdi mdi-information-outline" },
        { name: "Settings", value: "Settings", icon: "mdi mdi-cog" },
        { name: "Upload", value: "Upload", icon: "mdi mdi-upload" },
      ],
      tabIndex: 1,
      tabIndex2: 1,
      panelIndex: 1,
      switchIndex: true,
      sidebar: false,
      text: "Test",
    };
  },
  methods: {},
};
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
