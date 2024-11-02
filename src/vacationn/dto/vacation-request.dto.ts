import { IsBoolean, IsDateString, IsNotEmpty, IsOptional, Matches, MaxLength, MinLength } from 'class-validator';

export class VacationRequestDto {
  @IsNotEmpty({ message: 'A név megadása kötelező.' })
  name: string;

  @IsDateString({}, { message: 'Kezdő dátumnak érvényes dátumnak kell lennie.' })
  startDate: string;

  @IsDateString({}, { message: 'Vég dátumnak érvényes dátumnak kell lennie.' })
  endDate: string;

  @IsBoolean({ message: 'A fizetett szabadság értéke igaz vagy hamis lehet.' })
  isPaidLeave: boolean;

  @Matches(/^[A-Z]{3}-[1-9]{3}$/, { message: 'Az alkalmazott azonosító formátuma hibás. (Pl.: AAA-123)' })
  employeeId: string;

  @IsNotEmpty({ message: 'Az indoklás mező nem lehet üres.' })
  @MinLength(30, { message: 'Az indoklás minimum 30 karakter hosszú kell legyen.' })
  justification: string;
}
