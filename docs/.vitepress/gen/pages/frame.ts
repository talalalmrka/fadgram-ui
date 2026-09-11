import { NavbarGenerator } from "./navbar.ts";
import { colors } from "../helpers";
class FrameGenerator extends NavbarGenerator {
    constructor() {
        super("frame.md");
    }
    
    async content(): Promise<string[]> {
        return [
            this.h2("Basic usage"),
            await this.html(`<frameset>${await this.navbar('navbar-transparent-top navbar-transparent-primary')}</frameset>`),
        ];
    }
}

new FrameGenerator().generate();
