/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "x500-ts/dist/node/modules/AuthenticationFramework/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION PreferredSignatureAlgorithm */
/**
 * @summary PreferredSignatureAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PreferredSignatureAlgorithm ::= SEQUENCE {
 * sigIdentifier  AlgorithmIdentifier{SIGNATURE-ALGORITHM, {...}},
 * certIdentifier AlgorithmIdentifier{PUBLIC-KEY, {...}} OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class PreferredSignatureAlgorithm {
    constructor(
        /**
         * @summary `sigIdentifier`.
         * @public
         * @readonly
         */
        readonly sigIdentifier: AlgorithmIdentifier,
        /**
         * @summary `certIdentifier`.
         * @public
         * @readonly
         */
        readonly certIdentifier: OPTIONAL<AlgorithmIdentifier>
    ) {}

    /**
     * @summary Restructures an object into a PreferredSignatureAlgorithm
     * @description
     *
     * This takes an `object` and converts it to a `PreferredSignatureAlgorithm`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PreferredSignatureAlgorithm`.
     * @returns {PreferredSignatureAlgorithm}
     */
    public static _from_object(
        _o: {
            [_K in keyof PreferredSignatureAlgorithm]: PreferredSignatureAlgorithm[_K];
        }
    ): PreferredSignatureAlgorithm {
        return new PreferredSignatureAlgorithm(
            _o.sigIdentifier,
            _o.certIdentifier
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PreferredSignatureAlgorithm */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PreferredSignatureAlgorithm */
/**
 * @summary The Leading Root Component Types of PreferredSignatureAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PreferredSignatureAlgorithm: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "sigIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certIdentifier",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PreferredSignatureAlgorithm */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PreferredSignatureAlgorithm */
/**
 * @summary The Trailing Root Component Types of PreferredSignatureAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PreferredSignatureAlgorithm: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PreferredSignatureAlgorithm */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PreferredSignatureAlgorithm */
/**
 * @summary The Extension Addition Component Types of PreferredSignatureAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PreferredSignatureAlgorithm: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PreferredSignatureAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PreferredSignatureAlgorithm */
let _cached_decoder_for_PreferredSignatureAlgorithm: $.ASN1Decoder<PreferredSignatureAlgorithm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PreferredSignatureAlgorithm */

/* START_OF_SYMBOL_DEFINITION _decode_PreferredSignatureAlgorithm */
/**
 * @summary Decodes an ASN.1 element into a(n) PreferredSignatureAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PreferredSignatureAlgorithm} The decoded data structure.
 */
export function _decode_PreferredSignatureAlgorithm(el: _Element) {
    if (!_cached_decoder_for_PreferredSignatureAlgorithm) {
        _cached_decoder_for_PreferredSignatureAlgorithm = function (
            el: _Element
        ): PreferredSignatureAlgorithm {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let sigIdentifier!: AlgorithmIdentifier;
            let certIdentifier: OPTIONAL<AlgorithmIdentifier>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                sigIdentifier: (_el: _Element): void => {
                    sigIdentifier = _decode_AlgorithmIdentifier(_el);
                },
                certIdentifier: (_el: _Element): void => {
                    certIdentifier = _decode_AlgorithmIdentifier(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PreferredSignatureAlgorithm,
                _extension_additions_list_spec_for_PreferredSignatureAlgorithm,
                _root_component_type_list_2_spec_for_PreferredSignatureAlgorithm,
                undefined
            );
            return new PreferredSignatureAlgorithm(
                /* SEQUENCE_CONSTRUCTOR_CALL */ sigIdentifier,
                certIdentifier
            );
        };
    }
    return _cached_decoder_for_PreferredSignatureAlgorithm(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PreferredSignatureAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PreferredSignatureAlgorithm */
let _cached_encoder_for_PreferredSignatureAlgorithm: $.ASN1Encoder<PreferredSignatureAlgorithm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PreferredSignatureAlgorithm */

/* START_OF_SYMBOL_DEFINITION _encode_PreferredSignatureAlgorithm */
/**
 * @summary Encodes a(n) PreferredSignatureAlgorithm into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PreferredSignatureAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_PreferredSignatureAlgorithm(
    value: PreferredSignatureAlgorithm,
    elGetter: $.ASN1Encoder<PreferredSignatureAlgorithm>
) {
    if (!_cached_encoder_for_PreferredSignatureAlgorithm) {
        _cached_encoder_for_PreferredSignatureAlgorithm = function (
            value: PreferredSignatureAlgorithm,
            elGetter: $.ASN1Encoder<PreferredSignatureAlgorithm>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.sigIdentifier,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.certIdentifier === undefined
                            ? undefined
                            : _encode_AlgorithmIdentifier(
                                  value.certIdentifier,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PreferredSignatureAlgorithm(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PreferredSignatureAlgorithm */

/* eslint-enable */
