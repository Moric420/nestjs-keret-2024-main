import { Injectable } from '@nestjs/common';
import { VacationRequestDto } from './dto/vacation-request.dto';

@Injectable()
export class VacationService {
  validateDates(startDate: string, endDate: string): boolean {
    return new Date(startDate) < new Date(endDate);
  }

  async saveRequest(vacationRequestDto: VacationRequestDto) {
  
    console.log('Vacation request saved:', vacationRequestDto);
  }
}
