<template>
  <div class="login_s">
    <a-tabs>
      <a-tab-pane tab=" 用户密码登陆" key="1">
        <a-form layout="inline" :form="form" @submit="handleSubmit">
          <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
            <a-input
              v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入用户名!' }] },
        ]"
              placeholder="Username"
            >
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
            <a-input
              v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码!' }] },
        ]"
              type="password"
              placeholder="Password"
            >
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">
              登陆
            </a-button>
          </a-form-item>
        </a-form>
        </a-tab-pane>
      <!--<a-tab-pane tab="Tab 2" key="2">Content of tab 2</a-tab-pane>-->
      <!--<a-tab-pane tab="Tab 3" key="3">Content of tab 3</a-tab-pane>-->
    </a-tabs>
    <div>

      <a href="https://graph.qq.com/oauth2.0/authorize?client_id=101851897&redirect_uri=https://www.wellsmitch.top/index.html&response_type=code&scope=get_user_info">
        <a-icon type="qq" style="color: #1269d3;cursor: pointer;font-size: 20px"/>
      </a>
      <!--<a href="https://graph.qq.com/oauth2.0/authorize?client_id=101851897&redirect_uri=https://www.wellsmitch.top/httpsitem/index.html&response_type=code&scope=get_user_info">tomcat</a>-->

    </div>
  </div>

</template>

<script>
  import {Icon} from 'ant-design-vue';
  function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
  export default {
    name: "login",
    data() {
      return {
        hasErrors,
        form: this.$form.createForm(this, { name: 'horizontal_login' }),
      }
    },
    mounted() {
      sd();
      this.$nextTick(() => {
        // To disabled submit button at the beginning.
        this.form.validateFields();
      });
    },
    methods: {
      // Only show error after a field is touched.
      userNameError() {
        const { getFieldError, isFieldTouched } = this.form;
        return isFieldTouched('userName') && getFieldError('userName');
      },
      // Only show error after a field is touched.
      passwordError() {
        const { getFieldError, isFieldTouched } = this.form;
        return isFieldTouched('password') && getFieldError('password');
      },
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.$router.push({
              path: '/webIndex',
              name: 'webIndex',
            }).catch(function (e) {
              // console.log(e);
            })
          }
        });
      },
    }

  }
</script>

<style scoped="">
  @import "~ASSETS/login.css";
#sss {
  display: none;
}
.login_s {
  width: 300px;
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
