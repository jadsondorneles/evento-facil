<?php

namespace App\Validators;

use Respect\Validation\Validator as v;
use Respect\Validation\Exceptions\ValidationException;

class EventoValidator
{
    public static function validate(array $data)
    {
        $dateTimeValidator = function($input) {
            $format = 'Y-m-d H:i:s';
            $d = \DateTime::createFromFormat($format, $input);
            return $d && $d->format($format) === $input;
        };

        $validator = v::key('titulo', v::stringType()->notEmpty())
                      ->key('descricao', v::stringType()->notEmpty())
                      ->key('data_inicio', v::callback($dateTimeValidator)->setName('Data e hora de início'))
                      ->key('data_termino', v::callback($dateTimeValidator)->setName('Data e hora de término'));

        try {
            $validator->assert($data);
        } catch (ValidationException $e) {
            throw new \InvalidArgumentException($e->getMessage());
        }
    }

    public static function validateDate($date)
    {
        $format = 'd-m-Y';
        $d = \DateTime::createFromFormat($format, $date);
        if (!$d || $d->format($format) !== $date) {
            throw new \InvalidArgumentException("Formato de data inválido. Use o formato dd-mm-yyyy.");
        }
        return $d->format('Y-m-d');
    }
}