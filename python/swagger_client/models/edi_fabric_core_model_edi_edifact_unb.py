# coding: utf-8

"""
    EdiFabric API

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: v1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from swagger_client.models.edi_fabric_core_model_edi_edifact_s001 import EdiFabricCoreModelEdiEdifactS001  # noqa: F401,E501
from swagger_client.models.edi_fabric_core_model_edi_edifact_s002 import EdiFabricCoreModelEdiEdifactS002  # noqa: F401,E501
from swagger_client.models.edi_fabric_core_model_edi_edifact_s003 import EdiFabricCoreModelEdiEdifactS003  # noqa: F401,E501
from swagger_client.models.edi_fabric_core_model_edi_edifact_s004 import EdiFabricCoreModelEdiEdifactS004  # noqa: F401,E501
from swagger_client.models.edi_fabric_core_model_edi_edifact_s005 import EdiFabricCoreModelEdiEdifactS005  # noqa: F401,E501


class EdiFabricCoreModelEdiEdifactUNB(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'syntaxidentifie_r_1': 'EdiFabricCoreModelEdiEdifactS001',
        'interchangesende_r_2': 'EdiFabricCoreModelEdiEdifactS002',
        'interchangerecipien_t_3': 'EdiFabricCoreModelEdiEdifactS003',
        'dateandtimeofpreparatio_n_4': 'EdiFabricCoreModelEdiEdifactS004',
        'interchange_control_reference_5': 'str',
        'recipientsreferencepassworddetail_s_6': 'EdiFabricCoreModelEdiEdifactS005',
        'application_reference_7': 'str',
        'processing_priority_code_8': 'str',
        'acknowledgement_request_9': 'str',
        'interchange_agreement_identifier_10': 'str',
        'test_indicator_11': 'str'
    }

    attribute_map = {
        'syntaxidentifie_r_1': 'syntaxidentifieR_1',
        'interchangesende_r_2': 'interchangesendeR_2',
        'interchangerecipien_t_3': 'interchangerecipienT_3',
        'dateandtimeofpreparatio_n_4': 'dateandtimeofpreparatioN_4',
        'interchange_control_reference_5': 'interchangeControlReference_5',
        'recipientsreferencepassworddetail_s_6': 'recipientsreferencepassworddetailS_6',
        'application_reference_7': 'applicationReference_7',
        'processing_priority_code_8': 'processingPriorityCode_8',
        'acknowledgement_request_9': 'acknowledgementRequest_9',
        'interchange_agreement_identifier_10': 'interchangeAgreementIdentifier_10',
        'test_indicator_11': 'testIndicator_11'
    }

    def __init__(self, syntaxidentifie_r_1=None, interchangesende_r_2=None, interchangerecipien_t_3=None, dateandtimeofpreparatio_n_4=None, interchange_control_reference_5=None, recipientsreferencepassworddetail_s_6=None, application_reference_7=None, processing_priority_code_8=None, acknowledgement_request_9=None, interchange_agreement_identifier_10=None, test_indicator_11=None):  # noqa: E501
        """EdiFabricCoreModelEdiEdifactUNB - a model defined in Swagger"""  # noqa: E501

        self._syntaxidentifie_r_1 = None
        self._interchangesende_r_2 = None
        self._interchangerecipien_t_3 = None
        self._dateandtimeofpreparatio_n_4 = None
        self._interchange_control_reference_5 = None
        self._recipientsreferencepassworddetail_s_6 = None
        self._application_reference_7 = None
        self._processing_priority_code_8 = None
        self._acknowledgement_request_9 = None
        self._interchange_agreement_identifier_10 = None
        self._test_indicator_11 = None
        self.discriminator = None

        if syntaxidentifie_r_1 is not None:
            self.syntaxidentifie_r_1 = syntaxidentifie_r_1
        if interchangesende_r_2 is not None:
            self.interchangesende_r_2 = interchangesende_r_2
        if interchangerecipien_t_3 is not None:
            self.interchangerecipien_t_3 = interchangerecipien_t_3
        if dateandtimeofpreparatio_n_4 is not None:
            self.dateandtimeofpreparatio_n_4 = dateandtimeofpreparatio_n_4
        if interchange_control_reference_5 is not None:
            self.interchange_control_reference_5 = interchange_control_reference_5
        if recipientsreferencepassworddetail_s_6 is not None:
            self.recipientsreferencepassworddetail_s_6 = recipientsreferencepassworddetail_s_6
        if application_reference_7 is not None:
            self.application_reference_7 = application_reference_7
        if processing_priority_code_8 is not None:
            self.processing_priority_code_8 = processing_priority_code_8
        if acknowledgement_request_9 is not None:
            self.acknowledgement_request_9 = acknowledgement_request_9
        if interchange_agreement_identifier_10 is not None:
            self.interchange_agreement_identifier_10 = interchange_agreement_identifier_10
        if test_indicator_11 is not None:
            self.test_indicator_11 = test_indicator_11

    @property
    def syntaxidentifie_r_1(self):
        """Gets the syntaxidentifie_r_1 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501


        :return: The syntaxidentifie_r_1 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :rtype: EdiFabricCoreModelEdiEdifactS001
        """
        return self._syntaxidentifie_r_1

    @syntaxidentifie_r_1.setter
    def syntaxidentifie_r_1(self, syntaxidentifie_r_1):
        """Sets the syntaxidentifie_r_1 of this EdiFabricCoreModelEdiEdifactUNB.


        :param syntaxidentifie_r_1: The syntaxidentifie_r_1 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :type: EdiFabricCoreModelEdiEdifactS001
        """

        self._syntaxidentifie_r_1 = syntaxidentifie_r_1

    @property
    def interchangesende_r_2(self):
        """Gets the interchangesende_r_2 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501


        :return: The interchangesende_r_2 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :rtype: EdiFabricCoreModelEdiEdifactS002
        """
        return self._interchangesende_r_2

    @interchangesende_r_2.setter
    def interchangesende_r_2(self, interchangesende_r_2):
        """Sets the interchangesende_r_2 of this EdiFabricCoreModelEdiEdifactUNB.


        :param interchangesende_r_2: The interchangesende_r_2 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :type: EdiFabricCoreModelEdiEdifactS002
        """

        self._interchangesende_r_2 = interchangesende_r_2

    @property
    def interchangerecipien_t_3(self):
        """Gets the interchangerecipien_t_3 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501


        :return: The interchangerecipien_t_3 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :rtype: EdiFabricCoreModelEdiEdifactS003
        """
        return self._interchangerecipien_t_3

    @interchangerecipien_t_3.setter
    def interchangerecipien_t_3(self, interchangerecipien_t_3):
        """Sets the interchangerecipien_t_3 of this EdiFabricCoreModelEdiEdifactUNB.


        :param interchangerecipien_t_3: The interchangerecipien_t_3 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :type: EdiFabricCoreModelEdiEdifactS003
        """

        self._interchangerecipien_t_3 = interchangerecipien_t_3

    @property
    def dateandtimeofpreparatio_n_4(self):
        """Gets the dateandtimeofpreparatio_n_4 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501


        :return: The dateandtimeofpreparatio_n_4 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :rtype: EdiFabricCoreModelEdiEdifactS004
        """
        return self._dateandtimeofpreparatio_n_4

    @dateandtimeofpreparatio_n_4.setter
    def dateandtimeofpreparatio_n_4(self, dateandtimeofpreparatio_n_4):
        """Sets the dateandtimeofpreparatio_n_4 of this EdiFabricCoreModelEdiEdifactUNB.


        :param dateandtimeofpreparatio_n_4: The dateandtimeofpreparatio_n_4 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :type: EdiFabricCoreModelEdiEdifactS004
        """

        self._dateandtimeofpreparatio_n_4 = dateandtimeofpreparatio_n_4

    @property
    def interchange_control_reference_5(self):
        """Gets the interchange_control_reference_5 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501


        :return: The interchange_control_reference_5 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :rtype: str
        """
        return self._interchange_control_reference_5

    @interchange_control_reference_5.setter
    def interchange_control_reference_5(self, interchange_control_reference_5):
        """Sets the interchange_control_reference_5 of this EdiFabricCoreModelEdiEdifactUNB.


        :param interchange_control_reference_5: The interchange_control_reference_5 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :type: str
        """

        self._interchange_control_reference_5 = interchange_control_reference_5

    @property
    def recipientsreferencepassworddetail_s_6(self):
        """Gets the recipientsreferencepassworddetail_s_6 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501


        :return: The recipientsreferencepassworddetail_s_6 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :rtype: EdiFabricCoreModelEdiEdifactS005
        """
        return self._recipientsreferencepassworddetail_s_6

    @recipientsreferencepassworddetail_s_6.setter
    def recipientsreferencepassworddetail_s_6(self, recipientsreferencepassworddetail_s_6):
        """Sets the recipientsreferencepassworddetail_s_6 of this EdiFabricCoreModelEdiEdifactUNB.


        :param recipientsreferencepassworddetail_s_6: The recipientsreferencepassworddetail_s_6 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :type: EdiFabricCoreModelEdiEdifactS005
        """

        self._recipientsreferencepassworddetail_s_6 = recipientsreferencepassworddetail_s_6

    @property
    def application_reference_7(self):
        """Gets the application_reference_7 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501


        :return: The application_reference_7 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :rtype: str
        """
        return self._application_reference_7

    @application_reference_7.setter
    def application_reference_7(self, application_reference_7):
        """Sets the application_reference_7 of this EdiFabricCoreModelEdiEdifactUNB.


        :param application_reference_7: The application_reference_7 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :type: str
        """

        self._application_reference_7 = application_reference_7

    @property
    def processing_priority_code_8(self):
        """Gets the processing_priority_code_8 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501


        :return: The processing_priority_code_8 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :rtype: str
        """
        return self._processing_priority_code_8

    @processing_priority_code_8.setter
    def processing_priority_code_8(self, processing_priority_code_8):
        """Sets the processing_priority_code_8 of this EdiFabricCoreModelEdiEdifactUNB.


        :param processing_priority_code_8: The processing_priority_code_8 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :type: str
        """

        self._processing_priority_code_8 = processing_priority_code_8

    @property
    def acknowledgement_request_9(self):
        """Gets the acknowledgement_request_9 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501


        :return: The acknowledgement_request_9 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :rtype: str
        """
        return self._acknowledgement_request_9

    @acknowledgement_request_9.setter
    def acknowledgement_request_9(self, acknowledgement_request_9):
        """Sets the acknowledgement_request_9 of this EdiFabricCoreModelEdiEdifactUNB.


        :param acknowledgement_request_9: The acknowledgement_request_9 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :type: str
        """

        self._acknowledgement_request_9 = acknowledgement_request_9

    @property
    def interchange_agreement_identifier_10(self):
        """Gets the interchange_agreement_identifier_10 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501


        :return: The interchange_agreement_identifier_10 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :rtype: str
        """
        return self._interchange_agreement_identifier_10

    @interchange_agreement_identifier_10.setter
    def interchange_agreement_identifier_10(self, interchange_agreement_identifier_10):
        """Sets the interchange_agreement_identifier_10 of this EdiFabricCoreModelEdiEdifactUNB.


        :param interchange_agreement_identifier_10: The interchange_agreement_identifier_10 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :type: str
        """

        self._interchange_agreement_identifier_10 = interchange_agreement_identifier_10

    @property
    def test_indicator_11(self):
        """Gets the test_indicator_11 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501


        :return: The test_indicator_11 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :rtype: str
        """
        return self._test_indicator_11

    @test_indicator_11.setter
    def test_indicator_11(self, test_indicator_11):
        """Sets the test_indicator_11 of this EdiFabricCoreModelEdiEdifactUNB.


        :param test_indicator_11: The test_indicator_11 of this EdiFabricCoreModelEdiEdifactUNB.  # noqa: E501
        :type: str
        """

        self._test_indicator_11 = test_indicator_11

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(EdiFabricCoreModelEdiEdifactUNB, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, EdiFabricCoreModelEdiEdifactUNB):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
