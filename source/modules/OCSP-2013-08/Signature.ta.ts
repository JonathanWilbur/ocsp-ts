/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "x500-ts/dist/node/modules/AuthenticationFramework/Certificate.ta";

/* START_OF_SYMBOL_DEFINITION Signature */
/**
 * @summary Signature
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Signature ::= SEQUENCE {
 * signatureAlgorithm   AlgorithmIdentifier
 *                             { SIGNATURE-ALGORITHM, {...}},
 * signature            BIT STRING,
 * certs            [0] EXPLICIT SEQUENCE OF Certificate OPTIONAL }
 * ```
 *
 * @class
 */
export class Signature {
    constructor(
        /**
         * @summary `signatureAlgorithm`.
         * @public
         * @readonly
         */
        readonly signatureAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: BIT_STRING,
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: OPTIONAL<Certificate[]>
    ) {}

    /**
     * @summary Restructures an object into a Signature
     * @description
     *
     * This takes an `object` and converts it to a `Signature`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Signature`.
     * @returns {Signature}
     */
    public static _from_object(
        _o: { [_K in keyof Signature]: Signature[_K] }
    ): Signature {
        return new Signature(_o.signatureAlgorithm, _o.signature, _o.certs);
    }
}
/* END_OF_SYMBOL_DEFINITION Signature */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Signature */
/**
 * @summary The Leading Root Component Types of Signature
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Signature: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "signatureAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certs",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Signature */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Signature */
/**
 * @summary The Trailing Root Component Types of Signature
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Signature: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Signature */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Signature */
/**
 * @summary The Extension Addition Component Types of Signature
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Signature: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Signature */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Signature */
let _cached_decoder_for_Signature: $.ASN1Decoder<Signature> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Signature */

/* START_OF_SYMBOL_DEFINITION _decode_Signature */
/**
 * @summary Decodes an ASN.1 element into a(n) Signature
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Signature} The decoded data structure.
 */
export function _decode_Signature(el: _Element) {
    if (!_cached_decoder_for_Signature) {
        _cached_decoder_for_Signature = function (el: _Element): Signature {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let signatureAlgorithm!: AlgorithmIdentifier;
            let signature!: BIT_STRING;
            let certs: OPTIONAL<Certificate[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                signatureAlgorithm: (_el: _Element): void => {
                    signatureAlgorithm = _decode_AlgorithmIdentifier(_el);
                },
                signature: (_el: _Element): void => {
                    signature = $._decodeBitString(_el);
                },
                certs: (_el: _Element): void => {
                    certs = $._decode_explicit<Certificate[]>(() =>
                        $._decodeSequenceOf<Certificate>(
                            () => _decode_Certificate
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Signature,
                _extension_additions_list_spec_for_Signature,
                _root_component_type_list_2_spec_for_Signature,
                undefined
            );
            return new Signature(
                /* SEQUENCE_CONSTRUCTOR_CALL */ signatureAlgorithm,
                signature,
                certs
            );
        };
    }
    return _cached_decoder_for_Signature(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Signature */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Signature */
let _cached_encoder_for_Signature: $.ASN1Encoder<Signature> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Signature */

/* START_OF_SYMBOL_DEFINITION _encode_Signature */
/**
 * @summary Encodes a(n) Signature into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Signature, encoded as an ASN.1 Element.
 */
export function _encode_Signature(
    value: Signature,
    elGetter: $.ASN1Encoder<Signature>
) {
    if (!_cached_encoder_for_Signature) {
        _cached_encoder_for_Signature = function (
            value: Signature,
            elGetter: $.ASN1Encoder<Signature>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.signatureAlgorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.signature,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.certs === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      $._encodeSequenceOf<Certificate>(
                                          () => _encode_Certificate,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.certs, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Signature(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Signature */

/* eslint-enable */
