import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListCards } from './pokemon-list-cards';

describe('PokemonListCards', () => {
  let component: PokemonListCards;
  let fixture: ComponentFixture<PokemonListCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonListCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonListCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
