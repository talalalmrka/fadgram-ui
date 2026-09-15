import { Generator } from "../Generator";
import { inputGroupSizes, inputSizes } from "../helpers";

class FormGenerator extends Generator {
  constructor() {
    super("components/form.md", {
      icon: "bi-ui-checks",
      // order: 10,
    });
  }

  async inputSize(): Promise<string> {
    return await this.contents(
      inputSizes.map(
        async (size) =>
          await this.contents([
            this.h4(this.ucfirst(size)),
            await this.codePreview(
              `
        <label for="${size}-input" class="form-label">Input (${size})</label>
        <input id="${size}-input" type="text" class="form-control ${size}" placeholder="insert text...">
        <div class="form-info">Input ${size} info.</div>
      `,
            ),
          ]),
      ),
    );
  }

  async labelAndInfo(): Promise<string> {
    return await this.html(
      await this.contents([
        '<label for="first_name" class="form-label">First name</label>',
        '<input id="first_name" type="text" class="form-control" placeholder="insert text first name...">',
        '<div class="form-info">first name info</div>',
      ]),
    );
  }

  async icons(start = false, end = false): Promise<string> {
    const inputClasses = [
      start && "has-start-icon",
      end && "has-end-icon",
    ].filter(Boolean);

    return this.html(
      await this.contents([
        '<div class="form-control-container">',

        start
          ? '<span class="start-icon"><i class="icon bi-person"></i></span>'
          : "",

        `<input type="text" class="form-control${
          inputClasses.length ? ` ${inputClasses.join(" ")}` : ""
        }" placeholder="username">`,

        end ? '<span class="end-icon"><i class="icon bi-copy"></i></span>' : "",

        "</div>",
      ]),
    );
  }

  async select(): Promise<string> {
    return await this.html(`
      <select class="form-select">
      ${this.range(1, 3)
        .map((num) => `<option value="${num}">Option ${num}</option>`)
        .join("\n")}
      </select>
    `);
  }

  async checkbox(): Promise<string> {
    return await this.html(`
      <div class="form-check">
        <input type="checkbox" id="agree" value="1">
        <label for="agree">Agree policy</label>
      </div>
    `);
  }

  async radio(): Promise<string> {
    const countries = [
      {
        label: "United states",
        value: "usa",
      },
      {
        label: "United kigdom",
        value: "uk",
      },
      {
        label: "Germany",
        value: "germany",
      },
    ];
    return await this.html(
      await this.contents(
        countries.map(
          (country) => `
    <div class="form-radio">
      <input type="radio" id="country-${country.value}" name="countries" value="${country.value}">
      <label for="country-${country.value}">${country.label}</label>
    </div>
    `,
        ),
      ),
    );
  }

  async formSwitch(): Promise<string> {
    return await this.html(`
      <label class="form-switch">
        <input type="checkbox">
        <span class="toggle-slider"></span>
        <span class="form-switch-label">Agree all.</span>
      </label>
    `);
  }

  async formLayout(): Promise<string> {
    return await this.html(`
      <div class="grid grid-cols-1 gap-3">
        <div class="col">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="col">
                <label for="first_name" class="form-label">First name</label>
                <input id="first_name" type="text" class="form-control" placeholder="insert text first name...">
                <div class="form-info">first name info</div>
            </div>
            <div class="col">
                <label for="last_name" class="form-label">Last name</label>
                <input id="last_name" type="text" class="form-control" placeholder="insert text last name...">
                <div class="form-info">last name info</div>
            </div>
            <div class="col">
                <label for="gender" class="form-label">Gender</label>
                <select id="gender" class="form-select">
                    <option value="m">Male</option>
                    <option value="1">Female</option>
                </select>
                <div class="form-info">select gender info</div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="form-check">
            <input type="checkbox" id="agree" value="1">
            <label for="agree">Agree policy</label>
          </div>
        </div>
        <div class="col">
          <label class="form-label">Select country</label>
          <div class="form-radio">
            <input type="radio" id="country-1" name="countries" value="usa">
            <label for="country-1">United states</label>
          </div>
          <div class="form-radio">
            <input type="radio" id="country-2" name="countries" value="uk">
            <label for="country-2">United kindom</label>
          </div>
          <div class="form-radio disabled">
            <input type="radio" id="country-3" name="countries" value="germany" disabled>
            <label for="country-3">Germany</label>
          </div>
        </div>
        <div class="col">
          <label class="form-switch">
            <input type="checkbox">
            <span class="toggle-slider"></span>
            <span class="form-switch-label">Toggle</span>
          </label>
        </div>
        <div class="col">
          <label for="bio" class="form-label">Bio</label>
          <textarea id="bio" class="form-control" rows="4" placeholder="insert some bio about you..."></textarea>
          <div class="form-info">bio info</div>
        </div>
        <div class="col">
          <button type="button" class="btn btn-primary">Submit</button>
        </div>
      </div>
    `);
  }

  async validations(): Promise<string> {
    return await this.html(`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 has-code">
  <div class="col">
    <label for="success-input" class="form-label success">Success input</label>
    <input
      id="success-input"
      type="text"
      class="form-control success"
      placeholder="insert text..."
    />
    <div class="form-info success">Success input info</div>
  </div>
  <div class="col">
    <label for="error-input" class="form-label error">Error input</label>
    <input
      id="error-input"
      type="text"
      class="form-control error"
      placeholder="insert text..."
    />
    <div class="form-info error">Error input info</div>
  </div>
  <div class="col">
    <label for="bio-success" class="form-label success">Bio</label>
    <textarea
      id="bio-success"
      class="form-control success"
      rows="3"
      placeholder="insert some bio about you..."
    ></textarea>
    <div class="form-info success">success bio info</div>
  </div>
  <div class="col">
    <label for="bio-error" class="form-label error">Bio</label>
    <textarea
      id="bio-error"
      class="form-control error"
      rows="3"
      placeholder="insert some bio about you..."
    ></textarea>
    <div class="form-info error">Error bio info</div>
  </div>
  <div class="col">
    <label for="gender-success" class="form-label success">Gender</label>
    <select id="gender-success" class="form-select success">
      <option value="m">Male</option>
      <option value="1">Female</option>
    </select>
    <div class="form-info success">select gender info</div>
  </div>
  <div class="col">
    <label for="gender-error" class="form-label error">Gender</label>
    <select id="gender-error" class="form-select error">
      <option value="m">Male</option>
      <option value="1">Female</option>
    </select>
    <div class="form-info error">select gender info</div>
  </div>
  <div class="col">
    <div class="form-check success">
      <input type="checkbox" id="agree-success" value="1" />
      <label for="agree-success">Agree policy</label>
    </div>
  </div>
  <div class="col">
    <div class="form-check error">
      <input type="checkbox" id="agree-error" value="1" />
      <label for="agree-error">Agree policy</label>
    </div>
  </div>
  <div class="col">
    <label class="form-switch success">
      <input type="checkbox" />
      <span class="toggle-slider"></span>
      <span class="form-switch-label">Toggle</span>
    </label>
  </div>
  <div class="col">
    <label class="form-switch error">
      <input type="checkbox" />
      <span class="toggle-slider"></span>
      <span class="form-switch-label">Toggle</span>
    </label>
  </div>
</div>
    `);
  }

  async inputGroup(size?: string): Promise<string> {
    const className = size ? ` ${size}` : "";
    return await this.html(`
      <div class="input-group${className}">
  <input type="text" class="form-control" placeholder="write text..." />
  <input type="text" class="form-control" placeholder="write text..." />
  <select class="form-select">
    <option value="m">Male</option>
    <option value="f">Female</option>
  </select>
</div>
    `);
  }

  async loginFormCard(): Promise<string> {
    return await this.html(`
      <div class="card card-body md:max-w-[350px] mx-auto">
  <h5
    class="text-gradient from-primary to-pink text-3xl font-semibold text-center"
  >
    Sign in
  </h5>
  <form action="#" method="POST">
    <div class="grid grid-cols-1 gap-3">
      <div class="col">
        <label for="login" class="form-label">Username/Email</label>
        <div class="form-control-container">
          <span class="start-icon">
            <i class="icon bi-person-fill"></i>
          </span>
          <input
            type="text"
            id="login"
            name="login"
            class="form-control has-start-icon pill"
            placeholder="Username/Email"
            autofocus
            autocomplete="username"
          />
        </div>
      </div>
      <div class="col">
        <label for="login-password" class="form-label">Password</label>
        <div class="form-control-container">
          <span class="start-icon">
            <i class="icon bi-key-fill"></i>
          </span>
          <input
            type="password"
            id="login-password"
            name="password"
            class="form-control pill has-start-icon has-end-icon"
            placeholder="Password"
            autofocus
            autocomplete="password"
          />
        </div>
      </div>
      <div class="col">
        <label class="form-switch">
          <input type="checkbox" name="remember" />
          <span class="toggle-slider"></span>
          <span class="form-switch-label">Remember Me</span>
        </label>
      </div>
      <div class="col text-center text-sm">
        <div class="flex space-x-2 justify-center text-sm">
          <span>Forgot password?</span>
          <a href="#!" class="link">Recover password</a>
        </div>
      </div>
      <div class="col">
        <button type="submit" role="button" class="btn btn-primary w-full pill">
          Sign in
        </button>
      </div>
      <div class="col">
        <div class="flex space-x-2 justify-center text-sm">
          <span>Don't have an account?</span>
          <a href="#!" class="link">Sign up</a>
        </div>
      </div>
    </div>
  </form>
</div>
    `);
  }

  async registerFormCard(): Promise<string> {
    return await this.html(`
      <div class="card card-body md:max-w-[350px] mx-auto">
  <h5
    class="text-gradient from-primary to-pink text-3xl font-semibold text-center"
  >
    Create account
  </h5>
  <form action="#" method="POST">
    <div class="grid grid-cols-1 gap-3">
      <div class="col">
        <label for="name" class="form-label">Username</label>
        <div class="form-control-container">
          <span class="start-icon">
            <i class="icon bi-person-fill"></i>
          </span>
          <input
            type="text"
            id="name"
            name="name"
            class="form-control has-start-icon pill"
            placeholder="Username"
            autofocus
            autocomplete="username"
          />
        </div>
      </div>
      <div class="col">
        <label for="login" class="form-label">Email</label>
        <div class="form-control-container">
          <span class="start-icon">
            <i class="icon bi-envelope"></i>
          </span>
          <input
            type="text"
            id="email"
            name="login"
            class="form-control has-start-icon pill"
            placeholder="Email"
            autofocus
            autocomplete="email"
          />
        </div>
      </div>
      <div class="col">
        <label for="password" class="form-label">Password</label>
        <div class="form-control-container">
          <span class="start-icon">
            <i class="icon bi-key-fill"></i>
          </span>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control pill has-start-icon has-end-icon"
            placeholder="Password"
            autofocus
            autocomplete="new-password"
          />
        </div>
      </div>
      <div class="col">
        <label for="password_confirmation" class="form-label"
          >Confirm password</label
        >
        <div class="form-control-container">
          <span class="start-icon">
            <i class="icon bi-key-fill"></i>
          </span>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            class="form-control pill has-start-icon has-end-icon"
            placeholder="Confirm password"
            autofocus
            autocomplete="new-password"
          />
        </div>
      </div>
      <div class="col">
        <label class="form-switch">
          <input type="checkbox" name="remember" />
          <span class="toggle-slider"></span>
          <span class="form-switch-label"
            >I aggree <a class="link" href="#!">terms</a> and
            <a class="link" href="#!">conditions</a>.</span
          >
        </label>
      </div>
      <div class="col">
        <button type="submit" role="button" class="btn btn-primary w-full pill">
          Register
        </button>
      </div>
      <div class="col">
        <div class="flex space-x-2 justify-center text-sm">
          <span>Have an account?</span>
          <a href="#!" class="link">Sign in</a>
        </div>
      </div>
    </div>
  </form>
</div>
    `);
  }

  async content(): Promise<string[]> {
    return [
      // Input
      this.h2("Input"),
      await this.codePreview(
        '<input type="text" class="form-control" placeholder="Username">',
      ),

      // Input size
      this.h3("Input size"),
      await this.inputSize(),

      // Textarea
      this.h2("Textarea"),
      await this.codePreview(
        '<textarea class="form-control" placeholder="Insert description..."></textarea>',
      ),

      // Label & info
      this.h2("Label & Info"),
      await this.codePreview(await this.labelAndInfo()),

      // Icons
      this.h2("Icons"),

      // Start icon
      this.h3("Start Icon"),
      await this.codePreview(await this.icons(true, false)),

      // End icon
      this.h3("End Icon"),
      await this.codePreview(await this.icons(false, true)),

      // Start & End Icons
      this.h3("Start & End Icons"),
      await this.codePreview(await this.icons(true, true)),

      // Password toggle
      this.h2("Password Toggle"),
      await this.codePreview(
        '<input type="password" class="form-control" placeholder="Insert password">',
      ),

      // Select
      this.h2("Select"),
      await this.codePreview(await this.select()),

      // Checkbox
      this.h2("Checkbox"),
      await this.codePreview(await this.checkbox()),

      // Radio
      this.h2("Radio"),
      await this.codePreview(await this.radio()),

      // Toggle / Switch
      this.h2("Toggle / Switch"),
      await this.codePreview(await this.formSwitch()),

      // Form layout
      this.h2("Form layout"),
      await this.codePreview(await this.formLayout()),

      // Validations
      this.h2("Validations"),
      await this.codePreview(await this.validations()),

      // Input group
      this.h2("Input group"),
      await this.codePreview(await this.inputGroup()),

      // Input group size
      this.h3("Input group size"),
      await this.contents(
        inputGroupSizes.map(
          async (size) =>
            await this.contents([
              this.h4(`Input group (${size})`),
              await this.codePreview(await this.inputGroup(size)),
            ]),
        ),
      ),

      // Login form card
      this.h2("Login form card"),
      await this.codePreview(await this.loginFormCard()),

      // Register form card
      this.h2("Register form card"),
      await this.codePreview(await this.registerFormCard()),
    ];
  }
}

new FormGenerator().generate();
