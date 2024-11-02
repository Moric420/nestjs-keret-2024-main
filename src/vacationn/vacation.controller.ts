import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { VacationRequestDto } from './dto/vacation-request.dto';
import { VacationService } from './vacation.service';
import { ValidationPipe } from '@nestjs/common';
import { Response } from 'express';

@Controller('vacation')
export class VacationController {
  constructor(private readonly vacationService: VacationService) {}

  @Get('request')
  @Render('vacation/request')
  getVacationRequestForm() {
    return { errorMessage: null, formData: {} };
  }

  @Post('request')
  async handleVacationRequest(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true })) vacationRequestDto: VacationRequestDto,
    @Res() res: Response
  ) {
    const isValid = this.vacationService.validateDates(vacationRequestDto.startDate, vacationRequestDto.endDate);
    if (!isValid) {
      return res.render('vacation/request', {
        errorMessage: 'A kezdő dátumnak meg kell előznie a vég dátumot.',
        formData: vacationRequestDto,
      });
    }

    
    await this.vacationService.saveRequest(vacationRequestDto);
    return res.redirect('/vacation/success');
  }

  @Get('success')
  @Render('vacation/success')
  getSuccessPage() {
    return { message: 'Sikeres igénylés!' };
  }
}
