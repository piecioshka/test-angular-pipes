import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { OnlyFirstPipe } from "./pipes/only-first/only-first.pipe";

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent> = null;
  let component = null;
  let nativeElement = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, OnlyFirstPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    nativeElement = fixture.debugElement.nativeElement;
  }));

  afterEach(() => {
    nativeElement.remove();
  });

  it("should create the app", () => {
    expect(component).toBeTruthy();
  });

  it("should render title in a h1 tag", () => {
    fixture.detectChanges();
    expect(nativeElement.querySelector("h1").textContent).toContain(
      "Angular Pipe"
    );
  });

  it("should display single item in list", () => {
    fixture.detectChanges();
    expect(nativeElement.querySelectorAll("ul li").length).toEqual(1);
  });
});
