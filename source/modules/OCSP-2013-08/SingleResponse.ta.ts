/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "x500-ts/dist/node/modules/AuthenticationFramework/Extensions.ta";
import {
    CertID,
    _decode_CertID,
    _encode_CertID,
} from "../OCSP-2013-08/CertID.ta";
import {
    CertStatus,
    _decode_CertStatus,
    _encode_CertStatus,
} from "../OCSP-2013-08/CertStatus.ta";

/* START_OF_SYMBOL_DEFINITION SingleResponse */
/**
 * @summary SingleResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SingleResponse ::= SEQUENCE {
 * certID                       CertID,
 * certStatus                   CertStatus,
 * thisUpdate                   GeneralizedTime,
 * nextUpdate           [0]     EXPLICIT GeneralizedTime OPTIONAL,
 * singleExtensions     [1]     EXPLICIT Extensions{{re-ocsp-crl |
 *                                             re-ocsp-archive-cutoff |
 *                                             CrlEntryExtensions, ...}
 *                                             } OPTIONAL }
 * ```
 *
 * @class
 */
export class SingleResponse {
    constructor(
        /**
         * @summary `certID`.
         * @public
         * @readonly
         */
        readonly certID: CertID,
        /**
         * @summary `certStatus`.
         * @public
         * @readonly
         */
        readonly certStatus: CertStatus,
        /**
         * @summary `thisUpdate`.
         * @public
         * @readonly
         */
        readonly thisUpdate: GeneralizedTime,
        /**
         * @summary `nextUpdate`.
         * @public
         * @readonly
         */
        readonly nextUpdate: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `singleExtensions`.
         * @public
         * @readonly
         */
        readonly singleExtensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a SingleResponse
     * @description
     *
     * This takes an `object` and converts it to a `SingleResponse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SingleResponse`.
     * @returns {SingleResponse}
     */
    public static _from_object(
        _o: { [_K in keyof SingleResponse]: SingleResponse[_K] }
    ): SingleResponse {
        return new SingleResponse(
            _o.certID,
            _o.certStatus,
            _o.thisUpdate,
            _o.nextUpdate,
            _o.singleExtensions
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SingleResponse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SingleResponse */
/**
 * @summary The Leading Root Component Types of SingleResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SingleResponse: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certID",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec("certStatus", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "thisUpdate",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nextUpdate",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "singleExtensions",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SingleResponse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SingleResponse */
/**
 * @summary The Trailing Root Component Types of SingleResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SingleResponse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SingleResponse */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SingleResponse */
/**
 * @summary The Extension Addition Component Types of SingleResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SingleResponse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SingleResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SingleResponse */
let _cached_decoder_for_SingleResponse: $.ASN1Decoder<SingleResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SingleResponse */

/* START_OF_SYMBOL_DEFINITION _decode_SingleResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) SingleResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SingleResponse} The decoded data structure.
 */
export function _decode_SingleResponse(el: _Element) {
    if (!_cached_decoder_for_SingleResponse) {
        _cached_decoder_for_SingleResponse = function (
            el: _Element
        ): SingleResponse {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certID!: CertID;
            let certStatus!: CertStatus;
            let thisUpdate!: GeneralizedTime;
            let nextUpdate: OPTIONAL<GeneralizedTime>;
            let singleExtensions: OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                certID: (_el: _Element): void => {
                    certID = _decode_CertID(_el);
                },
                certStatus: (_el: _Element): void => {
                    certStatus = _decode_CertStatus(_el);
                },
                thisUpdate: (_el: _Element): void => {
                    thisUpdate = $._decodeGeneralizedTime(_el);
                },
                nextUpdate: (_el: _Element): void => {
                    nextUpdate = $._decode_explicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                singleExtensions: (_el: _Element): void => {
                    singleExtensions = $._decode_explicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SingleResponse,
                _extension_additions_list_spec_for_SingleResponse,
                _root_component_type_list_2_spec_for_SingleResponse,
                undefined
            );
            return new SingleResponse(
                /* SEQUENCE_CONSTRUCTOR_CALL */ certID,
                certStatus,
                thisUpdate,
                nextUpdate,
                singleExtensions
            );
        };
    }
    return _cached_decoder_for_SingleResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SingleResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SingleResponse */
let _cached_encoder_for_SingleResponse: $.ASN1Encoder<SingleResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SingleResponse */

/* START_OF_SYMBOL_DEFINITION _encode_SingleResponse */
/**
 * @summary Encodes a(n) SingleResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SingleResponse, encoded as an ASN.1 Element.
 */
export function _encode_SingleResponse(
    value: SingleResponse,
    elGetter: $.ASN1Encoder<SingleResponse>
) {
    if (!_cached_encoder_for_SingleResponse) {
        _cached_encoder_for_SingleResponse = function (
            value: SingleResponse,
            elGetter: $.ASN1Encoder<SingleResponse>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CertID(value.certID, $.BER),
                        /* REQUIRED   */ _encode_CertStatus(
                            value.certStatus,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeGeneralizedTime(
                            value.thisUpdate,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.nextUpdate === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeGeneralizedTime,
                                  $.BER
                              )(value.nextUpdate, $.BER),
                        /* IF_ABSENT  */ value.singleExtensions === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Extensions,
                                  $.BER
                              )(value.singleExtensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SingleResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SingleResponse */

/* eslint-enable */
