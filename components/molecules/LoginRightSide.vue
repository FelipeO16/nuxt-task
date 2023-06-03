<template>
  <b-col class="right-side justify-items-center">
    <b-container fluid class="h-100">
      <b-row class="h-25" align-v="center">
        <b-col>
          <h1 class="display-4 text-orange text-center font-weight-normal">
            Login
          </h1>
        </b-col>
      </b-row>
      <b-row align-h="center" class="h-50">
        <b-col md="2"></b-col>
        <b-col xl="6" md="8" class="">
          <b-row class="h-50" align-v="center">
            <b-col>
              <b-row>
                <b-col>
                  <b-input-group prepend="Email" class="mt-4">
                    <b-form-input
                      placeholder="place anything"
                      value="test@email.com"
                    ></b-form-input>
                  </b-input-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-input-group prepend="Password" class="mt-4">
                    <b-form-input
                      type="password"
                      placeholder="place anything"
                      value="test123"
                    ></b-form-input>
                  </b-input-group>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row class="h-25">
            <b-col>
              <b-row class="h-50">
                <b-col>
                  <b-form-checkbox
                    id="checkbox-1"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                    class="text-secondary"
                  >
                    Keep me logged in
                  </b-form-checkbox>
                </b-col>
              </b-row>
              <b-row class="h-50">
                <b-col
                  ><b-link href="#" disabled class="text-light"
                    >Forgot password?</b-link
                  ></b-col
                >
              </b-row>
            </b-col>
          </b-row>
          <b-row class="h-25">
            <b-col cols>
              <b-row class="h-100">
                <b-col @click="$store.dispatch('api/setToken')">
                  <DefaultButton to="/rules"
                    ><span
                      class="login-text font-weight-normal d-flex align-items-center"
                    >
                      Login
                    </span></DefaultButton
                  >
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="2"></b-col>
      </b-row>
    </b-container>
  </b-col>
</template>

<style>
.login-text {
  height: 100%;
  font-size: 1.5rem;
  color: #f8f9fa;
}
</style>
